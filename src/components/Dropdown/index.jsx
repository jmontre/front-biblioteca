// import { useState } from "react";
import DropdownIcon from "../../assets/imgs/dropdown.svg";

export const Dropdown = () => {
  `const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };`;

  return (
    <div className="relative transition-transform duration-200 ease-in-out hover:scale-103">
      <select
        name="Dropdown"
        id=""
        className="p-3 pr-10 bg-white appearance-none cursor-pointer"
      >
        <option value="">All Categories</option>
        <option value="">Action</option>
        <option value="">Romance</option>
        <option value="">Horror</option>
        <option value="">IDK</option>
      </select>
      <img
        src={DropdownIcon}
        alt=""
        className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 "
      />
    </div>
  );
};
