import { useEffect, useState } from "react";
import { SearchBook } from "../../components/SearchBook";
import { ProductPage } from "../Product";
import { getBooks } from "../Product/Services/BookServices";

export const HomePage = () => {
  const [filters, setFilters] = useState({ title: "", category: "" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getBooks(); 
        const books = res.data || res;

        const uniqueCategories = Array.from(
          new Set(books.map((book) => book.type).filter(Boolean))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <SearchBook onSearch={handleSearch} categories={categories} />
      <div className="pt-10 pl-20">
        <h2 className="text-2xl text-shadow-md mb-20 text-blue-900">
          Explore Our Collection
        </h2>
        <ProductPage filters={filters} />
      </div>
    </>
  );
};