import { useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";
import ProductList from "../components/ProductList.jsx";

export default function MyPagesSoldObjects() {
  const { isLoggedIn } = useContext(GlobalContext);

  const values = {
    title: "SÅLDA OBJEKT:",
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Sålda objekt!</h2>
        <p className="text-custom-green">Här kan du se dina sålda objekt.</p>
        <ProductList values={values} />
      </section>
    </>
  );
}
