import { useEffect, useState } from "react";
import { getBooks, getCopyCounts } from "./Services/BookServices";
import { CardComponent } from "../../components/Card";
import { BookDetailModal } from "../../components/BookDetailModal";
import useAuth from "../../hooks/useAuth";

export const ProductPage = ({ filters }) => {
  const { token } = useAuth();
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookRes, copyRes] = await Promise.all([
          getBooks(token),
          getCopyCounts(token),
        ]);

        const books = bookRes.data || bookRes;
        const copyCounts = copyRes.data || [];

        const booksWithAvailability = books.map((book) => {
          const copy = copyCounts.find((c) => c.idBook === book.idBook);
          return {
            ...book,
            availableCopies: copy?.available || 0,
          };
        });

        setAllBooks(booksWithAvailability);
        setFilteredBooks(booksWithAvailability);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setAllBooks([]);
        setFilteredBooks([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!filters || (!filters.title && !filters.category)) {
      setFilteredBooks(allBooks);
      return;
    }

    let filtered = [...allBooks];

    if (filters.title) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.category && filters.category !== "All") {
      filtered = filtered.filter((book) => book.type === filters.category);
    }

    setFilteredBooks(filtered);
  }, [filters, allBooks]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mr-20 sm:flex-row sm:mr-10">
        {filteredBooks.map((book) => (
          <CardComponent
            key={book.idBook}
            titleBook={book.title}
            descriptioBook={`Autor: ${book.author}`}
            imageBook={`data:image/jpeg;base64,${book.image64}`}
            categoryBook={book.type}
            isAvailable={book.availableCopies > 0}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
};