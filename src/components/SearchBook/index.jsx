import Search from "../../assets/imgs/search.svg";
import { Dropdown } from "../Dropdown/index";


export const SearchBook = () => {
  return (
    <>
      <div className="p-4 bg-gray-400 flex justify-center gap-1">
        <input className="p-2 bg-white w-90 rounded-l-2xl" type="text" placeholder="Ingrese el nombre" />
          <Dropdown />
        <button className="rounded-full p-2 bg-red-700">
          <img src={Search} alt="" className="size-5" />
        </button>
      </div>
    </>
  );
};
