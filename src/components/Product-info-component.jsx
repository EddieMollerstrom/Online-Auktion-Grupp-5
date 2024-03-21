import { useState, useEffect } from "react";

export default function ProductInfoComponent() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/1");
        const data = await response.json();

        setProduct(data);
        setLoading(false);

        const extractedTags = data.tags.join(" | ");
        setTags(extractedTags);
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
        <section className="flex justify-around align-middle mt-16 mb-20">
          <section className="w-80">
            <img src={product.img} alt={product.title} className="w-80 h-80" />

            <div className="mt-12 text-lg">
              <h3 className="font-bold">Beskrivning:</h3>
              <p className="text-base">{tags}</p>
              <p className="mt-6">{product.description}</p>
            </div>
          </section>

          <section className="flex flex-col justify-between">
            <div className="flex flex-col justify-between  h-80 w-80">
              <div>
                <p>{product.created}</p>
                <h2 className="font-bold text-3xl">{product.title}</h2>
                <p className="font-medium text-lg">
                  Slutpris |&nbsp; {product.bidCount}
                </p>
                <h2 className="font-bold mb-8 text-3xl">{product.price}</h2>
              </div>

              <div className="flex flex-col gap-2 text-lg font-semibold">
                <button className="bg-custom-green text-custom-white rounded-md p-1">
                  LÄGG BUD
                </button>
                <button className="border-solid border-2 border-custom-green rounded-md p-1">
                  KÖP NU
                </button>
                <button className="bg-custom-yellow text-custom-white rounded-md p-1">
                  BEVAKA AKTION
                </button>
              </div>
            </div>

            <div className="text-lg">
              <div className="border-b-2 flex justify-between gap-20 border-black">
                <p>Avslutas</p>
                <p>{product.ends}</p>
              </div>
              <div className="border-b-2 flex justify-between gap-20 border-black">
                <p>Frakt</p>
                <p>{product.shipping}</p>
              </div>
              <div className="border-b-2 flex justify-between gap-20 border-black">
                <p>Betalning</p>
                <p>Swish</p>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
