import { useEffect, useState } from "react";
import { getReaderBookings } from "../Services/readerServices";
import useAuth from "../../../hooks/useAuth";

export const ReaderBookingsPage = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getReaderBookings(user.email);
        setBookings(res.data || []);
      } catch (err) {
        const status = err?.response?.status;
        if (status === 404) {
          setBookings([]);
        } else {
          console.error("Error al obtener préstamos:", err);
        }
      }
    };

    if (user?.email) fetchBookings();
  }, [user]);

  if (!bookings.length) {
    return <p className="text-center mt-8">No tienes préstamos registrados.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">📚 Mis Préstamos</h2>
      <table className="w-full border rounded shadow-md bg-white">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="p-3 text-left">Libro</th>
            <th className="p-3 text-left">Inicio</th>
            <th className="p-3 text-left">Devolución</th>
            <th className="p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t">
              <td className="p-3">
                {booking.copyBook?.bookTitle || "Desconocido"}
              </td>
              <td className="p-3">{booking.dateBooking?.split("T")[0]}</td>
              <td className="p-3">
                {booking.dateReturn?.split("T")[0] || "—"}
              </td>
              <td className="p-3">
                {booking.state ? (
                  <span className="px-2 py-1 rounded text-white bg-yellow-600">
                    Activo
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded text-white bg-green-600">
                    Finalizado
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
