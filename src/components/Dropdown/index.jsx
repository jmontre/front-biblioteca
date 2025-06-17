// import { useState } from "react";


export const Dropdown = () => {
  `const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };`;

  return (
    <div className="flex items-center bg-white rounded-r-2xl">
      <select name="Dropdown" id="">
        <option value="">All Categories</option>
        <option value="">Action</option>
        <option value="">Romance</option>
        <option value="">Horror</option>
        <option value="">IDK</option>
      </select>
    </div>
  );
};
