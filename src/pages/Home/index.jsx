import { SearchBook } from "../../components/SearchBook";
import { ProductPage } from "../Product";
const defaultsId = [1,2,3,4,5,6,7,8,9,10];

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
        <ProductPage id={defaultsId}/>
        <div className="flex flex-wrap justify-center gap-5"></div>
      </div>
    </>
  );
};
