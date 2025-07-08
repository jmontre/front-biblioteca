import { useEffect, useState } from "react";
import { ReaderBookingsModal } from "../ReaderBookingModal";
import {
  getAllReaders,
  updateReaderState,
} from "../../../pages/Admin/Services/adminServices";

export const SearchReaderForm = () => {
  const [readers, setReaders] = useState([]);
  const [filteredReaders, setFilteredReaders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [selectedReader, setSelectedReader] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchReaders = async () => {
      try {
        const res = await getAllReaders();
        setReaders(res.data || []);
        setFilteredReaders(res.data || []);
      } catch (err) {
        console.error("Error al obtener lectores:", err);
      }
    };
    fetchReaders();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredReaders(
      readers.filter(
        (r) =>
          r.email.toLowerCase().includes(term) ||
          r.name.toLowerCase().includes(term) ||
          r.lastName.toLowerCase().includes(term) ||
          r.role?.name.toLowerCase().includes(term)
      )
    );
  };

  const toggleState = async (email, currentState) => {
    setMessage("");
    try {
      await updateReaderState(email, { newState: !currentState });
      const updatedReaders = readers.map((reader) =>
        reader.email === email ? { ...reader, state: !currentState } : reader
      );
      setReaders(updatedReaders);
      setFilteredReaders(
        updatedReaders.filter(
          (r) =>
            r.email.toLowerCase().includes(searchTerm) ||
            r.name.toLowerCase().includes(searchTerm) ||
            r.lastName.toLowerCase().includes(searchTerm)
        )
      );
      setMessage("✅ Estado actualizado.");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error al actualizar el estado del lector.");
    }
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold">👥 Gestión de Lectores</h2>

      <input
        type="text"
        placeholder="Buscar por nombre, apellido o email..."
        value={searchTerm}
        onChange={handleSearch}
        className="input input-bordered border rounded-md p-2 w-full"
      />

      {message && <p className="text-blue-600">{message}</p>}

      {filteredReaders.length > 0 ? (
        <ul className="space-y-4">
          {filteredReaders.map((reader) => (
            <li
              key={reader.id}
              className="border p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>👤</strong> {reader.name} {reader.lastName}
                </p>
                <p>
                  <strong>📧</strong> {reader.email}
                </p>
                <p>
                  <strong>🔖 Rol:</strong> {reader.role?.name || "Sin rol"}
                </p>
                <p>
                  <strong>📌 Estado:</strong>{" "}
                  {reader.state ? "Activo" : "Bloqueado"}
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSelectedReader(reader);
                    setShowModal(true);
                  }}
                  className="ml-2 px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md"
                >
                  📚 Ver Préstamos
                </button>
                {showModal && selectedReader && (
                  <ReaderBookingsModal
                    email={selectedReader.email}
                    onClose={() => setShowModal(false)}
                  />
                )}
                <button
                  onClick={() => toggleState(reader.email, reader.state)}
                  className={`ml-4 px-3 py-2 rounded-md text-white ${
                    reader.state
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {reader.state ? "🔒 Bloquear" : "✅ Activar"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No hay lectores encontrados.</p>
      )}
    </div>
  );
};
