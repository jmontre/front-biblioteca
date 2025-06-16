// import { useState } from "react";
import "./index.css";

export const Dropdown = () => {
  `const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };`;

  return (
    <div className="dropdown-main">
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
