import { useEffect } from "react";
import ProductList from "../components/ProductList.jsx";

export default function MyPages() {
  const values = {
    title: "AKTIVA ANNONSER:",
  };

  console.log(1);
  useEffect(() => {
    console.log(2);
    const fetchData = async () => {
      try {
        console.log(3);
        const response = await fetch("/api/testUsers");
        console.log(4);
        const data = await response.json();
        console.log(5);
        console.log(data);
      } catch {
        console.error("Fel vid fetch", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">
          Välkommen {data.firstName}!
        </h2>
        <p className="text-custom-green">Det här är dina sidor.</p>

        <div className="overview border-4 border-custom-green">
          <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
            FÖRSÄLJNINGSÖVERSIKT:
          </div>
          <div className="activeWrapper w-full flex text-center text-custom-gry">
            <section className="flex justify-center items-center">
              {data.currentSales.length}
              <br />
              AKTIVA
            </section>
            <section className="flex justify-center items-center">
              {data.sold.length}
              <br />
              SÅLDA
            </section>
            <section className="flex justify-center items-center">
              {data.notSold.length}
              <br />
              EJ SÅLDA
            </section>
          </div>
        </div>

        <ProductList values={values} />
      </section>
    </>
  );
}
