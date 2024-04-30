import { useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";
import ProductList from "../components/ProductList.jsx";

export default function MyPages() {
  const { isLoggedIn } = useContext(GlobalContext);

  const values = {
    title: "AKTIVA ANNONSER:",
  };
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
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
          {<ProductList values={values} />}
          <div className="p-4 head border-x-4 border-b-4 border-solid rounded-b-2xl border-custom-green flex justify-start items-center font-bold text-custom-green">
            {isLoggedIn ? (
              <div className="flex flex-col justify-between w-full">
                {isLoggedIn.createdProducts.map((createdProduct) => {
                  return (
                    <div className="flex justify-between border-b-2 w-full align-text-bottom border-custom-green">
                      <p>{createdProduct.title}</p>
                      <p>{createdProduct.bids.length}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Loading . . .</p>
            )}
          </div>
        </section>
      ) : (
        <p className="text-2xl text-custom-grey flex flex-col text-l uppercase tracking-widest font-normal place-items-center mt-6 ">
          Loading . . .
        </p>
      )}{" "}
    </>
  );
}
