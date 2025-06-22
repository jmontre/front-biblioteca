import Image from "../../assets/imgs/ejemplo_libro.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { getBooksById } from "../Product/Services/BookServices";
import { CardComponent } from "../../components/Card";

export const ProductPage = ({ id = [1, 2, 3, 4, 5, 6] }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooksById(id);
        setBooks(data);
      } catch (error) {
        console.error("Error al cargar libro por ID", error);
      }
    };
    fetchBooks();
  }, [id]);

  if (!books) return <p>Cargando...</p>;
  return (
    <>
      <div className="flex flex-wrap justify-start gap-5">
        {books.map((book) => (
          <CardComponent
            key={book.id}
            titleBook={book.name}
            descriptioBook={book.species}
            imageBook={book.image}
          />
        ))}
      </div>
    </>
  );
};
