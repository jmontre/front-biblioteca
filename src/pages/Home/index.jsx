import { SearchBook } from "../../components/SearchBook";
import { ProductPage } from "../Product";

export const HomePage = () => {
  return (
    <>
      <SearchBook />
      <div className="pt-10 pl-20">
        <div className="">
          <h2 className="text-2xl text-shadow-md mb-20">
            Explore Our Collection
          </h2>
        </div>
        <ProductPage />
        <div className="flex flex-wrap justify-center gap-5"></div>
      </div>
    </>
  );
};
