export const CardComponent = ({
  imageBook,
  titleBook,
  descriptioBook,
  categoryBook,
  availableCopies,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col justify-between w-[275px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      <img
        src={imageBook}
        alt={titleBook}
        className="w-full h-[350px] object-cover"
      />
      <div className="p-4 bg-blue-950 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold mb-3 text-white">{titleBook}</h2>
        <p className="text-white text-m mb-3 flex-grow">{descriptioBook}</p>
        <div>
          <span className="inline-block px-2 bg-red-700 text-white rounded-2xl">
            {categoryBook}
          </span>
        </div>
      </div>
    </div>
  );
};
