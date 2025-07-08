import { useState, useEffect } from "react";
import {
  createLoan,
  findReaderByEmail,
  getBookCopyByTitle,
  getAllReaders,
} from "../../../pages/Admin/Services/adminServices";

export const CreateLoanForm = () => {
  const [title, setTitle] = useState("");
  const [copies, setCopies] = useState([]);
  const [selectedCopyId, setSelectedCopyId] = useState(null);
  const [message, setMessage] = useState("");
  const [readers, setReaders] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllReaders();
        setReaders(res.data);
      } catch (err) {
        console.error("Error al obtener lectores", err);
      }
    })();
  }, []);

  // Búsqueda reactiva de copias
  useEffect(() => {
    const fetchCopies = async () => {
      if (title.trim().length < 2) {
        setCopies([]);
        return;
      }

      try {
        const res = await getBookCopyByTitle(title);
        if (res.data.length === 0) {
          setMessage("⚠️ No hay copias disponibles para este libro.");
        } else {
          setMessage("");
        }
        setCopies(res.data);
      } catch (err) {
        console.error("Error al buscar copias:", err);
        setMessage("❌ Error al buscar copias.");
        setCopies([]);
      }
    };

    const delay = setTimeout(fetchCopies, 500); // debounce
    return () => clearTimeout(delay);
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEmail || !selectedCopyId) return;

    try {
      const res = await findReaderByEmail(selectedEmail);
      const userId = res.data.id;

      await createLoan({
        userId,
        copyBookId: selectedCopyId,
      });

      setMessage("✅ Préstamo registrado correctamente.");
      setTitle("");
      setCopies([]);
      setSelectedCopyId(null);
      setSelectedEmail("");
    } catch (err) {
      console.error("Error al crear préstamo:", err);
      setMessage("❌ Error al registrar el préstamo.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📖 Registrar Préstamo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Selecciona un lector</label>
          <select
            className="w-full border p-2 rounded-md"
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
            required
          >
            <option value="">-- Selecciona un lector --</option>
            {readers.map((reader) => (
              <option key={reader.id} value={reader.email}>
                {reader.name} {reader.lastName} ({reader.email})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Buscar título del libro</label>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe el título..."
          />
        </div>

        {copies.length > 0 && (
          <div className="border rounded-md p-2 max-h-60 overflow-y-auto">
            <p className="font-semibold mb-2">Resultados:</p>
            <ul className="space-y-2">
              {copies.map((copy) => (
                <li
                  key={copy.idCopyBook}
                  className={`cursor-pointer p-2 border rounded-md hover:bg-blue-100 ${
                    selectedCopyId === copy.idCopyBook
                      ? "bg-blue-200 font-semibold"
                      : ""
                  }`}
                  onClick={() => setSelectedCopyId(copy.idCopyBook)}
                >
                  <span className="block">
                    📖 <strong>{copy.title}</strong> — Copia #{copy.idCopyBook}
                  </span>
                  <span className="text-sm text-gray-600">
                    Autor: {copy.author} | Tipo: {copy.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Registrar Préstamo
        </button>

        {message && <p className="mt-4 text-red-600">{message}</p>}
      </form>
    </div>
  );
};