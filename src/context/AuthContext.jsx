import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  getToken,
  saveToken,
  removeToken,
} from "../pages/Login/Services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser({
        email: decoded.sub,
        rol:
          decoded.role || decoded.rol || decoded.authorities?.[0] || "LECTOR", 
      });
    }
  }, [token]);
  const login = (jwt) => {
    saveToken(jwt);
    setToken(jwt);
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
