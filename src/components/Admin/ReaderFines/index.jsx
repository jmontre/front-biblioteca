import { useEffect, useState } from "react";
import {
  getAllReaders,
  getFinesByEmail,
} from "../../../pages/Admin/Services/adminServices";

export const ReaderFines = () => {
  const [readers, setReaders] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [fines, setFines] = useState([]);

  useEffect(() => {
    const fetchReaders = async () => {
      try {
        const res = await getAllReaders();
        setReaders(res.data);
      } catch (err) {
        console.error("Error al obtener lectores", err);
      }
    };
    fetchReaders();
  }, []);

  useEffect(() => {
    const fetchFines = async () => {
      if (!selectedEmail) return;
      try {
        const res = await getFinesByEmail(selectedEmail);
        setFines(res.data);
      } catch (err) {
        console.error("Error al obtener multas", err);
      }
    };
    fetchFines();
  }, [selectedEmail]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">💸 Ver Multas por Lector</h2>

      <select
        className="border p-2 rounded w-full"
        value={selectedEmail}
        onChange={(e) => setSelectedEmail(e.target.value)}
      >
        <option value="">-- Selecciona un lector --</option>
        {readers.map((r) => (
          <option key={r.id} value={r.email}>
            {r.email}
          </option>
        ))}
      </select>

      {fines.map((fine) => (
        <li key={fine.id} className="border p-3 rounded bg-white shadow">
          <p>
            <strong>📖 Libro:</strong> {fine.copyBook?.bookTitle}
          </p>
          <p>
            <strong>✍️ Autor:</strong> {fine.copyBook?.bookAuthor}
          </p>
          <p>
            <strong>📚 Tipo:</strong> {fine.copyBook?.bookType}
          </p>
          <p>
            <strong>💵 Monto:</strong> ${fine.amount}
          </p>
          <p>
            <strong>📝 Descripción:</strong> {fine.description}
          </p>
          <p>
            <strong>📌 Estado:</strong> {fine.state}
          </p>
          <p>
            <strong>📅 Fecha:</strong>{" "}
            {new Date(fine.fineDate).toLocaleDateString()}
          </p>
        </li>
      ))}
    </div>
  );
};
