import { useLoaderData, useNavigation } from "react-router-dom";
import ProductListWithFilter from "../components/ProductListWithFilter.jsx";

export const fetchProducts = async () => {
  try {
    const res = await fetch("/api/products/");
    return res.json();
  } catch (error) {
    console.error("Fel vid fetch", error);
  }
};

export default function Home() {
  const products = useLoaderData();

  const navigation = useNavigation();
  /*const loading = loader ? loader.isLoading() : false;   */
  if (navigation.state === "loading") {
    return (
      <p className="text-2xl text-custom-grey flex flex-col text-l uppercase tracking-widest font-normal place-items-center mt-6">
        Laddar...
      </p>
    );
  }

  return (
    <>
      <ProductListWithFilter products={products} />
    </>
  );
}
