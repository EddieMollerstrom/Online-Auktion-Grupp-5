import { useState } from "react";

export default function BidDialog({ productId, bidCount, currentHighestBid }) {
  const [bidInput, setBidInput] = useState(null);
  const [badBidInput, setBadBidInput] = useState("");

  const updateBidCount = async () => {
    if (bidInput > currentHighestBid) {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidCount: bidCount + 1 }),
        });
        const result = response.json();
        console.log(result);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Om förfrågan är lyckad kan du göra något här, som att uppdatera lokalt state.
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
              onClick={updateBidCount}
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

      <dialog id="buyDialog" className="h-44 w-80 rounded-md p-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-center mb-2">Köp nu</h2>
          <button className="border-2 border-solid border-custom-green hover:bg-custom-green hover:text-custom-white rounded-md p-1 bg-custom-white text-custom-green">
            Köp
          </button>
          <br />
          <button
            onClick={() => document.getElementById("buyDialog").close()}
            className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
          >
            Stäng
          </button>
        </div>
      </dialog>
    </>
  );
}
