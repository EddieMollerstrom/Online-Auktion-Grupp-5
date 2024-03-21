import { useLayoutEffect, useState } from "react";
import ProductCard from "./ProductCard";
import HorseImage from "/Horse.jpg";

export default function ProductItem() {
  const products = [
    {
      img: HorseImage,
      name: "Häst",
      price: 10,
      description: "Horsey",
    },
    {
      img: HorseImage,
      name: "Flygande Snigel",
      price: 10,
      description: "Horsey",
    },
    {
      img: HorseImage,
      name: "Ko",
      price: 10,
      description: "Horsey",
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="search here"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      <main className="flex flex-wrap justify-center gap-10 m-20">
        <h2>Current Auctions</h2>
        <ul>
          {products
            .filter((product) => {
              const searchLowerCase = searchInput.toLowerCase();
              const productNameLowerCase = product.name.toLowerCase();
              return searchLowerCase === ""
                ? true
                : productNameLowerCase.includes(searchLowerCase);
            })
            .map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
        </ul>
      </main>
    </>
  );
}
