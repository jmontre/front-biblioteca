import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm"><strong className="font-bold">Todos los derechos reservados.</strong> BookHUB &copy; 2025. </p>
        <p className="text-sm font-bold">Este sitio es parte de un proyecto ficticio para fines académicos.</p>
        <p className="text-sm"><strong className="font-bold">Contacto:</strong> contacto@BookHub.ucm.cl</p>
      </div>
    </footer>
  );
};

export default Footer;