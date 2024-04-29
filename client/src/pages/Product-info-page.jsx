import ProductInfoComponent from "../components/Product-info-component.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Globalcontext.jsx";

export default function ProductInfoPage() {
  const { productId } = useParams();

  const { isLoggedIn } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();

        setProduct(data);
        setLoading(false);
        console.log(isLoggedIn);
      } catch (error) {
        console.error("Fel vid fetch", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-2xl text-custom-grey flex flex-col text-l uppercase tracking-widest font-normal place-items-center mt-6 ">
          Laddar...
        </p>
      ) : (
        <ProductInfoComponent product={product} />
      )}
    </>
  );
}
