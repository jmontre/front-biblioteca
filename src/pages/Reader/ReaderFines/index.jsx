import { useEffect, useState } from "react";
import { getReaderFines } from "../Services/readerServices";
import useAuth from "../../../hooks/useAuth";

export const ReaderFinesPage = () => {
  const { user } = useAuth();
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false); 
      return;
    }

    const fetchFines = async () => {
      try {
        const res = await getReaderFines(user.email);
        setFines(res.data || []);
      } catch (err) {
        if (err.response?.status !== 404) {
          console.warn("Error inesperado al obtener multas:", err);
        }
        setFines([]);
      } finally {
        setLoading(false); 
      }
    };

    fetchFines();
  }, [user]);

  if (loading) {
    return <p className="text-center mt-8">Cargando multas...</p>;
  }

  if (!fines.length) {
    return <p className="text-center mt-8">No tienes multas registradas.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">💸 Mis Multas</h2>
      <table className="w-full border rounded shadow-md bg-white">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="p-3 text-left">Libro</th>
            <th className="p-3 text-left">Monto</th>
            <th className="p-3 text-left">Fecha</th>
            <th className="p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {fines.map((fine) => (
            <tr key={fine.idFine} className="border-t">
              <td className="p-3">
                {fine.copyBook?.book?.title || "Desconocido"}
              </td>
              <td className="p-3">${fine.amount}</td>
              <td className="p-3">{fine.date?.split("T")[0]}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    fine.state === "PAGADA" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {fine.state}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
