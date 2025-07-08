import { useEffect, useState } from "react";
import { getFines } from "../../pages/Reader/Services/readerServices";
import useAuth from "../../hooks/useAuth";

export const LectorFines = () => {
  const { user } = useAuth();
  const [fines, setFines] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getFines(user.sub);
        setFines(res.data);
      } catch (e) {
        console.error("Error obteniendo multas", e);
      }
    };
    fetch();
  }, [user]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">💸 Mis Multas</h2>
      {fines.length === 0 ? (
        <p>No tienes multas pendientes.</p>
      ) : (
        <ul className="space-y-3">
          {fines.map((f) => (
            <li key={f.idFine} className="bg-red-100 p-4 rounded shadow">
              <p><strong>Monto:</strong> ${f.amount}</p>
              <p><strong>Fecha:</strong> {f.fineDate}</p>
              <p><strong>Estado:</strong> {f.paid ? "Pagada" : "Pendiente"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};