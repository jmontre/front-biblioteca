import { useState } from "react";
import { createBook } from "../../../pages/Admin/Services/adminServices";

export const CreateBookForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    editorial: "",
    type: "",
    image64: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image64" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image64: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await createBook(form);
      setSuccess(true);
      setForm({
        title: "",
        author: "",
        editorial: "",
        type: "",
        image64: "",
      });
    } catch (err) {
      setError("Error al crear libro");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
        className="input input-bordered border rounded-md p-2 w-full"
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={form.author}
        onChange={handleChange}
        required
        className="input input-bordered border rounded-md p-2 w-full"
      />
      <input
        type="text"
        name="editorial"
        placeholder="Editorial"
        value={form.editorial}
        onChange={handleChange}
        className="input input-bordered border rounded-md p-2 w-full"
      />
      <input
        type="text"
        name="type"
        placeholder="Tipo (Ej: Programación, Historia)"
        value={form.type}
        onChange={handleChange}
        required
        className="input input-bordered border rounded-md p-2 w-full"
      />
      <input
        type="file"
        name="image64"
        accept="image/*"
        onChange={handleChange}
        className="file-input border rounded-md p-2 w-full"
      />

      <button type="submit" className="bg-blue-900 text-white hover:bg-blue-700 rounded-md p-3">
        Crear Libro
      </button>

      {success && <p className="text-green-500">📘 Libro creado correctamente</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};