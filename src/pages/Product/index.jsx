import Image from "../../assets/imgs/ejemplo_libro.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { getBooksById } from "../Product/Services/BookServices";
import { CardComponent } from "../../components/Card";

const defaultsId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const ProductPage = ({ id = defaultsId }) => {
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

  console.log("ProductPage renderizado");

  if (!books) return <p>Cargando...</p>;
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mr-20 sm:flex-row sm:mr-10">
        {books.map((book) => (
          <CardComponent
            key={book.id}
            titleBook={book.name}
            descriptioBook={book.species}
            imageBook={book.image}
            categoryBook={book.status}
          />
        ))}
      </div>
    </>
  );
};
