import Search from "../../assets/imgs/search.svg";
import { Dropdown } from "../Dropdown/index";
import "./index.css";

export const SearchBook = () => {
  return (
    <>
      <div className="search-main">
        <input className="search-input" type="text" placeholder="Ingrese el nombre" />
          <Dropdown />
        <button className="search-button">
          <img src={Search} alt="" className="search-image" />
        </button>
      </div>
    </>
  );
};
