import { useEffect, useState } from "react";
import { getBookingsByEmail, returnBook } from "../../../pages/Admin/Services/adminServices";

export const ReaderBookings = ({ email, onClose }) => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookingsByEmail(email);
        setBookings(res.data);
        setFilteredBookings(res.data); 
      } catch (err) {
        setMessage("❌ Error al cargar los préstamos.");
      }
    };
    fetchBookings();
  }, [email]);

  useEffect(() => {
    const filtered = bookings.filter((b) =>
      b.copyBook?.book?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  const handleReturn = async (bookingId) => {
    try {
      await returnBook(bookingId);
      setMessage("✅ Devolución registrada.");
      const res = await getBookingsByEmail(email);
      setBookings(res.data);
    } catch {
      setMessage("❌ Error al registrar devolución.");
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleString("es-CL", {
      timeZone: "America/Santiago",
      dateStyle: "medium",
      timeStyle: "short",
    });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md max-w-lg w-full space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">📚 Préstamos de {email}</h2>
          <button onClick={onClose} className="text-sm text-red-600">✖ Cerrar</button>
        </div>

        {message && <p className="text-blue-600">{message}</p>}

        <input
          type="text"
          placeholder="🔍 Buscar por título..."
          className="w-full border p-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul className="space-y-2 max-h-[300px] overflow-auto">
          {filteredBookings.map((b) => (
            <li key={b.id} className="border p-2 rounded-md">
              <p><strong>Título:</strong> {b.copyBook?.book?.title || "N/D"}</p>
              <p><strong>Préstamo:</strong> {formatDate(b.dateBooking)}</p>
              <p><strong>Devolución:</strong> {formatDate(b.dateReturn)}</p>
              <p><strong>Estado:</strong> {b.state ? "Activo" : "Devuelto"}</p>
              {b.state && (
                <button
                  onClick={() => handleReturn(b.id)}
                  className="mt-1 px-2 py-1 text-sm bg-blue-800 text-white rounded"
                >
                  Registrar Devolución
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};