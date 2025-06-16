import "./index.css";
import { NavLink } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-logo">
          <h1>
            Book<strong className="navbar-logo-strong">Hub</strong>
          </h1>
        </div>

        <div className="navbar-navegation">
          <ul className="navbar-links">
            <li className="navbar-link">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to={"/category"}>Category</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to={"/product"}>Product</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

