import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const MainNavigation = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate(); 

  const isAdmin = user?.rol === "ADMIN";
  const isLector = user?.rol === "LECTOR";

  return (
    <div className="flex flex-row justify-between bg-blue-950">
      <div className="justify-center p-10">
        <h1 className="text-5xl text-white ml-10">
          Book<strong className="text-red-700">Hub</strong>
        </h1>
      </div>

      <div className="flex items-center mr-20">
        <ul className="flex flex-row gap-5">
          {/* Home */}
          <li>
            <NavLink
              className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-120 hover:text-white hover:bg-red-700"
              to={"/"}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-120 hover:text-white hover:bg-red-700"
              to={"/about"}
            >
              About
            </NavLink>
          </li>

          {/* Admin */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-115 hover:text-white hover:bg-red-700"
                  to={"/admin"}
                >
                  Panel Administrativo
                </NavLink>
              </li>
            </>
          )}

          {isLector && (
            <>
              <li>
                <NavLink
                  to={"/my-bookings"}
                  className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-125 hover:text-white hover:bg-red-700"
                >
                  Mis Préstamos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-fines"}
                  className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-125 hover:text-white hover:bg-red-700"
                >
                  Mis Multas
                </NavLink>
              </li>
            </>
          )}

          {/* Login / Logout / Registro */}
          {!isAuthenticated ? (
            <>
              <li>
                <NavLink
                  className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-125 hover:text-white hover:bg-red-700"
                  to={"/login"}
                >
                  Iniciar Sesión
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="p-3 bg-white rounded-2xl flex items-center transition-transform hover:scale-125 hover:text-white hover:bg-red-700"
                  to={"/register"}
                >
                  Registro
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                className="p-3 bg-red-600 rounded-2xl flex items-center transition-transform hover:scale-125 hover:bg-red-700 text-white"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
