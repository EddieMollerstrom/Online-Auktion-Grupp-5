import { useState, useEffect } from "react";

export default function BidDialog({
  productId,
  bids,
  currentHighestBid,
  minimumBid,
}) {
  const [bidInput, setBidInput] = useState(null);
  const [badBidInput, setBadBidInput] = useState("");
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/bids/`);
        const data = await response.json();
        const bidAmount = data.bidAmount;
        setProduct(bidAmount);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Fel vid fetch", error);
      }
    };
    fetchData();
  }, [bidInput]);

  const updateBids = async () => {
    if (bidInput > currentHighestBid && bidInput > minimumBid) {
      try {
        const response = await fetch(`/api/bids/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product: bidInput }),
        });
        const result = response.json();
        console.log(result);

        if (!response.ok) {
          throw new Error("Något gick fel");
        }
      } catch (error) {
        console.error("There was an error updating bid count:", error);
      }
    } else {
      setBadBidInput("Du måste lägga ett högre bud en nuvarande");
    }
  };

  function closeModal() {
    document.getElementById("bidDialog").close();
    location.reload();
  }

  return (
    <>
      {loading ? (
        <p className="text-2xl text-custom-grey flex flex-col text-l uppercase tracking-widest font-normal place-items-center mt-6 ">
          Laddar...
        </p>
      ) : (
        <dialog id="bidDialog" className="h-54 w-80 rounded-md p-5">
          <div className="flex flex-col justify-center">
            <h2 className="text-center">Lägg bud</h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Bud"
                onChange={(event) => setBidInput(event.target.value)}
                required
                className="border-2 rounded-md p-1 mt-2 mb-2 border-solid border-custom-grey"
              />
              <p>{badBidInput}</p>

              <button
                type="button"
                onClick={updateBids}
                className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
              >
                Lägg bud
              </button>
            </form>
            <br />
            <button
              onClick={closeModal}
              className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
            >
              Stäng
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
