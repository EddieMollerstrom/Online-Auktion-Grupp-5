import { useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";
import ProductList from "../components/ProductList.jsx";

export default function MyPages() {
  const { isLoggedIn } = useContext(GlobalContext);

  console.log(isLoggedIn);
  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">
          Välkommen {isLoggedIn.username}!
        </h2>
        <p className="text-custom-green">Det här är dina sidor.</p>
        <div className="overview border-4 border-custom-green">
          <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
            FÖRSÄLJNINGSÖVERSIKT:
          </div>
          <div className="activeWrapper w-full flex text-center text-custom-gry">
            <section className="flex justify-center items-center">
              {isLoggedIn.createdProducts.length}
              <br />
              AKTIVA
            </section>
            <section className="flex justify-center items-center">
              {}
              <br />
              SÅLDA
            </section>
            <section className="flex justify-center items-center">
              {}
              <br />
              EJ SÅLDA
            </section>
          </div>
        </div>
        {/*         <ProductList values={values} />
         */}{" "}
      </section>
    </>
  );
}
