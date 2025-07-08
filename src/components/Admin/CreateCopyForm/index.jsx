import { useEffect, useState } from "react";
import { createCopy, getAllBooks } from "../../../pages/Admin/Services/adminServices";

export const CreateCopyForm = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getAllBooks();
        setBooks(res.data);
      } catch (err) {
        setError("❌ Error al cargar libros.");
      }
    };

    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setError("");

    if (!selectedBookId) return setError("❗ Debes seleccionar un libro.");

    try {
      const response = await createCopy(selectedBookId);
      setSuccessMsg("✅ " + response.data);
      setSelectedBookId("");
    } catch (err) {
      setError("❌ Error al crear copia del libro");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <label className="block mb-1">Selecciona un libro</label>
      <select
        value={selectedBookId}
        onChange={(e) => setSelectedBookId(e.target.value)}
        className="input input-bordered border rounded-md p-2 w-full"
        required
      >
        <option value="">-- Selecciona un libro --</option>
        {Array.isArray(books) &&
          books.map((book) => (
            <option key={book.idBook} value={book.idBook}>
              {book.title} — {book.author}
            </option>
          ))}
      </select>

      <button
        type="submit"
        className="p-3 bg-blue-900 rounded-md hover:bg-blue-700 text-white"
      >
        Crear Copia
      </button>

      {successMsg && <p className="text-green-600">{successMsg}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};