export const CardComponent = ({ imageBook, titleBook, descriptioBook }) => {
  return (
    <>
      <div className="relative flex flex-col justify-end max-w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={imageBook}
          alt={titleBook}
          className="w-full h-70 object-cover"
        />
        <div className="p-4 bg-gray-400 flex justify-end flex-col h-30 items-center">
          <h2 className="text-lg font-semibold mb-3" value="Hola">
            {titleBook}
          </h2>
          <p className="text-white text-sm text-center">{descriptioBook}</p>
        </div>
      </div>
    </>
  );
};
