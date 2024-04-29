import { useState } from "react";

export default function BidDialog({ productId, bids, minimumBid }) {
  const [bidInput, setBidInput] = useState(null);
  const [badBidInput, setBadBidInput] = useState("");

  const updateBids = async () => {
    if (bidInput < minimumBid) {
      setBadBidInput(
        "Du måste lägga ett högre bud än det lägsta tillåtna budet."
      );
    } else if (bids.length === 0) {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidAmount: bidInput }),
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error("Något gick fel");
        } else {
          location.reload();
        }
      } catch (error) {
        console.error("There was an error updating bidAmount:", error);
      }
    } else if (bidInput <= bids[bids.length - 1].bidAmount) {
      setBadBidInput("Du måste lägga ett högre bud än nuvarande högsta bud.");
    } else {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidAmount: bidInput }),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Något gick fel");
        } else {
          location.reload();
        }
      } catch (error) {
        console.error("There was an error updating bidAmount:", error);
      }
    }
  };

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
              onClick={updateBids}
              className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
            >
              Lägg bud
            </button>
          </form>
          <br />
          <button
            onClick={() => document.getElementById("bidDialog").close()}
            className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
          >
            Stäng
          </button>
        </div>
      </dialog>
    </>
  );
}
