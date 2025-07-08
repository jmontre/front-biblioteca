import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  // Mientras el user aún no ha sido cargado (puede pasar en el primer render)
  if (!user) return null; // o un <Loader /> si prefieres

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requiredRole && user.rol !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;