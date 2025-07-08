import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage    = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError("❌ Las contraseñas no coinciden");
    }

    try {
      await axios.post("http://localhost:8087/api/auth/register", {
        ...formData,
        role: "LECTOR",
      });
      setSuccess("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError("❌ Error al registrar. Intenta con otro correo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">📚 Crear Cuenta BookHub</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Nombre"
            className="input input-bordered border rounded-md p-2 w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Apellido"
            className="input input-bordered border rounded-md p-2 w-full"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="input input-bordered border rounded-md p-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="input input-bordered border rounded-md p-2 w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            className="input input-bordered border rounded-md p-2 w-full"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="p-4 bg-blue-900 rounded-md text-white w-full">
            Registrarse
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </div>
    </div>
  );
};