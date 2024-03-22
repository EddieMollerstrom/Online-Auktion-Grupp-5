import { useState, useEffect } from "react";

export default function ProductInfoComponent() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState("");
  const [showCreatedDate, setShowCreatedDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");

  const formatTime = (time) => {
    const options = { weekday: "long" };
    const formattedTime = new Date(time);
    const month = formattedTime
      .toLocaleDateString("sv-SE", { month: "short" })
      .toUpperCase();
    const date = formattedTime.toLocaleDateString("sv-SE", { day: "numeric" });
    const dayOfTheWeek = new Intl.DateTimeFormat("sv-SE", options)
      .format(formattedTime)
      .toUpperCase();
    const hour = formattedTime.getHours().toLocaleString("sv-SE");
    const minutes = formattedTime.getMinutes().toLocaleString("sv-SE");

    return {
      objectDayOfTheWeek: dayOfTheWeek,
      objectDate: date,
      objectMonth: month,
      objectHour: hour,
      objectMinutes: minutes,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/1");
        const data = await response.json();

        setProduct(data);
        setLoading(false);

        const extractedTags = data.tags.join(" | ");
        setTags(extractedTags);

        const createdDateObject = formatTime(data.created);
        setShowCreatedDate(createdDateObject);

        const endDateObject = formatTime(data.ends);
        setShowEndDate(endDateObject);
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
                <p>{`${showCreatedDate.objectDayOfTheWeek} ${showCreatedDate.objectDate} ${showCreatedDate.objectMonth} ${showCreatedDate.objectHour}:${showCreatedDate.objectMinutes}`}</p>
                <h2 className="font-bold text-3xl">{product.title}</h2>
                <p className="font-medium text-lg">
                  Slutpris |&nbsp; {product.bidCount}
                </p>
                <h2 className="font-bold mb-8 text-3xl">{product.price} kr</h2>
              </div>

              <div className="flex flex-col gap-2 text-lg font-semibold">
                <button className="bg-custom-green border-custom-green border-2 border-solid text-custom-white rounded-md p-1 hover:border-2 hover:border-soli hover:bg-custom-white hover:text-custom-green active:opacity-80">
                  LÄGG BUD
                </button>
                <button className="border-solid border-2 border-custom-green rounded-md p-1 bg-custom-white text-custom-green hover:text-custom-white hover:bg-custom-green active:opacity-80">
                  KÖP NU
                </button>
                <button className="bg-custom-yellow text-custom-white rounded-md p-1 border-solid border-2 border-custom-yellow hover:bg-custom-white hover:text-custom-yellow active:opacity-80">
                  BEVAKA AKTION
                </button>
              </div>
            </div>

            <div className="text-lg">
              <div className="border-b-2 flex justify-between gap-20 border-black">
                <p>Avslutas</p>
                <p>{`${showEndDate.objectDayOfTheWeek} ${showEndDate.objectDate} ${showEndDate.objectMonth} ${showEndDate.objectHour}:${showEndDate.objectMinutes}`}</p>
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
