import { useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";
import ProductList from "../components/ProductList.jsx";

export default function MyPagesBids() {
  const { isLoggedIn } = useContext(GlobalContext);

  const values = {
    title: "DINA BUDGIVNIGNAR:",
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Dina Bud!</h2>
        <p className="text-custom-green">Här kan du se dina bud!.</p>
        <ProductList values={values} />
        <div className="p-4 head border-x-4 border-b-4 border-solid rounded-b-2xl border-custom-green flex justify-start items-center font-bold text-custom-green">
          {isLoggedIn ? (
            <div className="flex flex-col justify-between w-full">
              {isLoggedIn.userBids.map((userBid) => {
                return (
                  <div className="flex justify-between border-b-2 w-full align-text-bottom border-custom-green">
                    <p>{userBid.title}</p>
                    <p>{userBid.bids.length}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Loading . . .</p>
          )}
        </div>
      </section>
    </>
  );
}
