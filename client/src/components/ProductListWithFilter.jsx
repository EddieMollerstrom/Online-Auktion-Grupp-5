import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductListWithFilter({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortOrderName, setSortOrderName] = useState("ascendingName");

  const filteredProducts = products
    ? products.filter((product) => {
        const searchLowerCase = searchInput.toLowerCase();
        const productNameLowerCase = product.title.toLowerCase();
        const tagsLowerCase = product.tags
          ? product.tags.map((tag) => tag.toLowerCase())
          : [];

        return searchLowerCase === ""
          ? true
          : productNameLowerCase.includes(searchLowerCase) ||
              tagsLowerCase.some((tag) => tag.includes(searchLowerCase));
      })
    : [];

  const filteredByCategory = selectedCategory
    ? filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : filteredProducts;

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "ascending" ? "descending" : "ascending"
    );
  };

  const toggleSortOrderName = () => {
    setSortOrderName((prevSortOrderName) =>
      prevSortOrderName === "ascendingName" ? "descendingName" : "ascendingName"
    );
  };

  const sortedDataByPrice = filteredByCategory.sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const sortedDataByName = filteredByCategory.sort((a, b) => {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    if (sortOrderName === "ascendingName") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  const sortedDataToDisplay =
    sortOrderName === "ascendingName" ? sortedDataByName : sortedDataByPrice;

  return (
    <>
      <section className="flex flex-col items-center gap-12 p-8 pb-72">
        <div className="flex items-center justify-center w-9/12 h-44 bg-custom-green m-16 rounded">
          <div className="w-9/12 flex flex-col self-center">
            <h2 className="text-xl uppercase tracking-widest font-bold self-start mb-2.5 text-custom-white">
              Sveriges största cirkus marknad
            </h2>
            <div className="SearchContainer">
              <input
                className="min-w-full h-10 self-center p-2  mb-5 rounded-sm"
                id="search"
                type="text"
                placeholder="Vad letar du efter?"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <>
            <div className="flex w-9/12">
              <h2 className="text-4xl uppercase ml-10 tracking-widest font-bold self-end">
                Auktioner
              </h2>
            </div>
            <div className="flex w-9/12 items-start pl-10 gap-1 text-xl font-medium">
              <button
                className="relative transition-all duration-500 hover:text-custom-green mr-12"
                onClick={toggleSortOrder}
                style={{ overflow: "hidden" }}
              >
                <span
                  className="absolute bottom-0 left-0 bg-custom-green h-0.5 w-0 transition-all duration-500 hover:w-full"
                  style={{ transitionTimingFunction: "ease-out" }}
                ></span>
                Pris
              </button>
              <button
                className="relative transition-all duration-500 hover:text-custom-green"
                onClick={toggleSortOrderName}
                style={{ overflow: "hidden" }}
              >
                <span
                  className="absolute bottom-0 left-0 bg-custom-green h-0.5 w-0 transition-all duration-500 hover:w-full"
                  style={{ transitionTimingFunction: "ease-out" }}
                ></span>
                Namn
              </button>
            </div>
            <ul className="list-none grid grid-cols-4 gap-10">
              {sortedDataToDisplay.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </>
        ) : (
          <p className="text-xl uppercase tracking-widest font-bold mb-2.5 text-custom-gray">
            Inga produkter matchade din sökning.
          </p>
        )}
      </section>
    </>
  );
}
