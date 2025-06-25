export const CardComponent = ({ imageBook, titleBook, descriptioBook, categoryBook }) => {
  return (
    <>
      <div className="relative flex flex-col justify-end max-w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
        <img
          src={imageBook}
          alt={titleBook}
          className="w-full h-70 object-cover"
        />
        <div className="p-4 bg-blue-950 flex flex-col h-35 ">
          <h2 className="text-lg font-semibold mb-3 text-white" value="Hola">
            {titleBook}
          </h2>
          <p className="text-white text-m mb-3">{descriptioBook}</p>
          <div className="mb-3">
            <span className="inline-block px-2 bg-red-700 text-white rounded-2xl">
              {categoryBook}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
