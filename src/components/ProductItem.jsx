import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductItem() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/");
        const data = await response.json();

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Fel vid fetch", error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = product
    ? product.filter((product) => {
        const searchLowerCase = searchInput.toLowerCase();
        const productNameLowerCase = product.title.toLowerCase();
        return searchLowerCase === ""
          ? true
          : productNameLowerCase.includes(searchLowerCase);
      })
    : [];

  return (
    <>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <section className="flex flex-col items-center gap-12 p-8 pb-72">
          <div className="flex items-center justify-center w-9/12 h-44 bg-custom-green m-16 rounded">
            <div className="w-9/12 flex flex-col self-center">
              <h2 className="text-xl uppercase tracking-widest font-bold self-start mb-2.5 text-custom-white">
                Vad söker du idag?
              </h2>
              <input
                className="min-w-full h-10 self-center p-2  mb-5 rounded-sm"
                id="search"
                type="text"
                placeholder="Sök här . . ."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex w-9/12">
                <h2 className="text-4xl uppercase ml-10 tracking-widest font-bold">
                  Auktioner
                </h2>
              </div>
              <ul className="list-none grid grid-cols-4 gap-10">
                {filteredProducts.map((product) => (
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
      )}
    </>
  );
}
