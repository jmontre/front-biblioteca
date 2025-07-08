import { useEffect, useState } from "react";
import {
  getBookingsByEmail,
  returnBook,
} from "../../../pages/Admin/Services/adminServices";

export const ReaderBookingsModal = ({ email, onClose }) => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookingsByEmail(email);
        setBookings(res.data);
      } catch (err) {
        setMessage("❌ Error al cargar los préstamos.");
      }
    };
    fetchBookings();
  }, [email]);

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
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/20 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white p-6 rounded-md max-w-lg w-full space-y-4 shadow-lg"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-lg text-red-600">
            ✖ Cerrar
          </button>
        </div>

        {message && <p className="text-blue-600">{message}</p>}

        <ul className="space-y-2 max-h-[300px] overflow-auto">
          {bookings.map((b) => (
            <li key={b.id} className="border p-2 rounded-md">
              <p>
                <strong>Título:</strong> {b.copyBook?.bookTitle || "N/D"}
              </p>
              <p>
                <strong>Préstamo:</strong> {formatDate(b.dateBooking)}
              </p>
              <p>
                <strong>Devolución:</strong> {formatDate(b.dateReturn)}
              </p>
              <p>
                <strong>Estado:</strong> {b.state ? "Activo" : "Devuelto"}
              </p>
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
