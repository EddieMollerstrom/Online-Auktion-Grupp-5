import { useLoaderData } from "react-router-dom";
import ProductListWithFilter from "../components/ProductListWithFilter.jsx";

export const fetchProducts = async () => {
  try {
    const res = await fetch("/api/products/");
    return res.json();
  } catch (error) {
    console.error("Fel vid fetch", error);
    throw error;
  }
};

export default function Home({ loader }) {
  const products = useLoaderData();
  const loading = loader ? loader.isLoading() : false;

  return (
    <>
      {loading ? (
        <p>Laddar...</p>
      ) : (
        <ProductListWithFilter products={products} />
      )}
    </>
  );
}
