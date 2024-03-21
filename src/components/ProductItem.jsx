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
    {
      img: HorseImage,
      name: "Ko",
      price: 10,
      description: "Horsey",
    },
    {
      img: HorseImage,
      name: "Ko",
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
      <section className="flex flex-col items-center gap-12 p-8">
        <div className="flex flex-col">
          <h2 className="text-xl uppercase p-4 tracking-widest font-medium self-center">
            Vad söker du idag?
          </h2>
          <input
            className="w-96 h-8"
            id="search"
            type="text"
            placeholder="Sök här"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        <h2 className="text-2xl uppercase p-4 tracking-widest font-medium border-solid border-y-2 border-black">
          Current Auctions
        </h2>

        <ul className="list-none grid grid-cols-3 gap-10 align">
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
      </section>
    </>
  );
}
