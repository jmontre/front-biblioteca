import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-950">
        <div className="justify-center p-10">
          <h1 className="text-5xl text-white ml-10">
            Book<strong className="text-red-600">Hub</strong>
          </h1>
        </div>

        <div className="flex items-center mr-20">
          <ul className="flex flex-row gap-5">
            <li className="">
              <NavLink
                className="p-3 bg-white rounded-2xl flex items-center transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white hover:bg-red-700"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-3 bg-white rounded-2xl flex items-center transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white hover:bg-red-700"
                to={"/category"}
              >
                Category
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className="p-3 bg-white rounded-2xl flex items-center transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white hover:bg-red-700"
                to={"/product"}
              >
                Product
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className="p-3 bg-white rounded-2xl flex items-center transition-transform duration-200 ease-in-out hover:scale-125 hover:text-white hover:bg-red-700"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
