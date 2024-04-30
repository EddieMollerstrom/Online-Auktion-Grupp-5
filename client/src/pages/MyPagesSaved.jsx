import { useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";
import ProductList from "../components/ProductList.jsx";

export default function MyPagesSavedObjects() {
  const { isLoggedIn } = useContext(GlobalContext);

  const values = {
    title: "SPARADE OBJEKT:",
    products: savedProducts,
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Sparade objekt!</h2>
        <p className="text-custom-green">Här kan du se dina sparade objekt.</p>
        <ProductList values={values} />
      </section>
    </>
  );
}
