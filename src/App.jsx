import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootPage } from "./pages/Root";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { AdminPage } from "./pages/Admin";
import { HomePage } from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import { ReaderBookingsPage } from "./pages/Reader/ReadersBooking"; 
import { ReaderFinesPage } from "./pages/Reader/ReaderFines";       
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
        
          {/* Página pública */}
          <Route index element={<HomePage />} />
          
          {/* Autenticación */}
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          {/* Rutas protegidas por rol */}
          <Route
            path="admin"
            element={
              <PrivateRoute requiredRole="ADMIN">
                <AdminPage />
              </PrivateRoute>
            }
          />

          <Route
            path="my-bookings"
            element={
              <PrivateRoute requiredRole="LECTOR">
                <ReaderBookingsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="my-fines"
            element={
              <PrivateRoute requiredRole="LECTOR">
                <ReaderFinesPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;