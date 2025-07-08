

const students = [
  {
    name: "Javier Montre Morales",
    role: "Frontend Developer",
    github: "https://github.com/jmontre",
  },
  {
    name: "André Flores",
    role: "Backend Developer",
    github: "https://github.com/Andrewx1414/",
  },
  ,{
    name: "Repositorio Frontend",
    github: "https://github.com/jmontre/front-biblioteca.git"
  }
  ,{
    name: "Repositorio Backend",
    github: "https://github.com/Andrewx1414/backendproyecto"
  }
];


export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">👥 Sobre los estudiantes</h1>
      <div className="grid gap-6 sm:grid-cols-2 w-full max-w-3xl">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
            <p className="text-sm text-gray-600">{student.role}</p>
            <a
              href={student.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-md shadow hover:bg-blue-800 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};