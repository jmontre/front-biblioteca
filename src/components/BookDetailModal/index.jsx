import { useEffect, useState } from "react";
import { getBookCopyByTitle } from "../../pages/Admin/Services/adminServices";

export const BookDetailModal = ({ book, onClose }) => {
  const [hasAvailableCopy, setHasAvailableCopy] = useState(false);

  useEffect(() => {
    const fetchCopies = async () => {
      try {
        const res = await getBookCopyByTitle(book.title);
        const available = res.data.some((copy) => copy.state === true);
        setHasAvailableCopy(available);
      } catch (err) {
        console.error("Error al obtener copias del libro", err);
        setHasAvailableCopy(false);
      }
    };
    fetchCopies();
  }, [book.title]);

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/20 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-2 text-center">{book.title}</h2>
        {book.image64 && (
          <img
            src={`data:image/jpeg;base64,${book.image64}`}
            alt={book.title}
            className="w-full max-h-[300px] object-contain my-4 rounded"
          />
        )}
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Tipo:</strong> {book.type}</p>
        <div className={`mt-4 text-lg font-semibold ${hasAvailableCopy ? 'text-green-600' : 'text-red-600'}`}>
          {hasAvailableCopy ? '✅ Disponible' : '❌ No disponible'}
        </div>
      </div>
    </div>
  );
};