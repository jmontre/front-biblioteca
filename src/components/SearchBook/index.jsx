import { useState, useEffect } from "react";
import Search from "../../assets/imgs/search.svg";
import DropdownIcon from "../../assets/imgs/dropdown.svg";

export const SearchBook = ({ onSearch, categories = [] }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    onSearch({ title, category });
  }, [title, category]);

  return (
    <div className="p-4 bg-gray-400 flex justify-center gap-1">
      <input
        className="p-2 bg-white w-90 rounded-l-2xl"
        type="text"
        placeholder="Ingrese el nombre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="relative">
        <select
          className="p-3 pr-10 bg-white appearance-none cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <img
          src={DropdownIcon}
          alt=""
          className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
      </div>

      <button
        type="button"
        className="rounded-r-2xl p-2 bg-red-700 transition-transform duration-200 hover:scale-110"
      >
        <img src={Search} alt="buscar" className="size-5" />
      </button>
    </div>
  );
};