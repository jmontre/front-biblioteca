import { useState } from "react";
import { CreateBookForm } from "../../components/Admin/CreateBookForm";
import { CreateCopyForm } from "../../components/Admin/CreateCopyForm";
import { CreateLoanForm } from "../../components/Admin/CreateLoanForm";
import { ReaderFines } from "../../components/Admin/ReaderFines";
import { SearchReaderForm } from "../../components/Admin/SearchReaderForm";

export const AdminPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { key: "createBookForm", label: "📘 Crear Libro" },
    { key: "createCopyForm", label: "📚 Crear Copia" },
    { key: "searchReaderForm", label: "🔍 Buscar Lector" },
    { key: "readerFines", label: "💸 Ver Multas" },
    { key: "createLoanForm", label: "➕ Agregar Préstamo" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-10 text-center text-blue-950">Panel de Administración</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10 ">
        {sections.map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-2 rounded ${
              activeSection === key
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-800 hover:text-white`}
            onClick={() => setActiveSection(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        {activeSection === "createBookForm" && <CreateBookForm />}
        {activeSection === "createCopyForm" && <CreateCopyForm />}
        {activeSection === "searchReaderForm" && <SearchReaderForm />}
        {activeSection === "readerFines" && <ReaderFines />}
        {activeSection === "createLoanForm" && <CreateLoanForm />}
      </div>
    </div>
  );
};
