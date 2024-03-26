import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductItem() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <section className="flex flex-col items-center gap-12 p-8">
          <div className="flex flex-col w-9/12 h-36 bg-zinc-100">
            <h2 className="text-xl uppercase p-4 tracking-widest font-medium self-center">
              Vad söker du idag?
            </h2>
            <input
              className="w-96 h-8 self-center"
              id="search"
              type="text"
              placeholder="Vad letar du efter?"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
          <h2 className="text-2xl uppercase p-4 tracking-widest font-medium border-solid border-y-2 border-black">
            Current Auctions
          </h2>

          <ul className="list-none grid grid-cols-3 gap-10 align">
            {product
              .filter((product) => {
                const searchLowerCase = searchInput.toLowerCase();
                const productNameLowerCase = product.title.toLowerCase();
                return searchLowerCase === ""
                  ? true
                  : productNameLowerCase.includes(searchLowerCase);
              })
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
