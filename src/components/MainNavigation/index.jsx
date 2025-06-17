import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-950">
        <div className="justify-center p-10">
          <h1 className="text-3xl text-white">
            Book<strong className="text-red-600">Hub</strong>
          </h1>
        </div>

        <div className="flex items-center mr-10">
          <ul className="flex flex-row gap-5">
            <li className="p-4 bg-white rounded-2xl">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="p-4 bg-white rounded-2xl">
              <NavLink to={"/category"}>Category</NavLink>
            </li>
            <li className="p-4 bg-white rounded-2xl">
              <NavLink to={"/product"}>Product</NavLink>
            </li>
            <li className="p-4 bg-white rounded-2xl">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

