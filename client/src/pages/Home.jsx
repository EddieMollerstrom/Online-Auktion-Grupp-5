import ProductListWithFilter from "../components/ProductListWithFilter.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/");
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Fel vid fetch", error);
      }
    };
    fetchData();
  }, []);

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
