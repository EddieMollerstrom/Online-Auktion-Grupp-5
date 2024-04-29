import React, { useState } from "react";

function AuctionForm({ bidCount }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ends, setEndDate] = useState("");
  const [minimumBid, setminimumBid] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImageURL] = useState("");

  const [däggdjur, setDäggdjur] = useState(false);
  const [kräldjur, setKräldjur] = useState(false);
  const [fågel, setFågel] = useState(false);
  const [rovdjur, setRovdjur] = useState(false);

  const tags = [
    däggdjur ? "Däggdjur" : "",
    kräldjur ? "Kräldjur" : "",
    fågel ? "Fågel" : "",
    rovdjur ? "Rovdjur" : "",
  ].filter((tag) => tag !== "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          ends,
          minimumBid,
          price,
          img,
          tags,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
      } else {
        setTitle("");
        setDescription("");
        setEndDate("");
        setminimumBid("");
        setPrice("");
        setImageURL("");
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className="w-8/12">
        <h2 className="text-2xl font-bold text-center mb-4">Skapa annons</h2>
        <form
          className="bg-custom-grey rounded flex flex-col p-7 gap-3 text-custom-white annonscontainer"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            required
            name="title"
            className="text-black"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor="description">Beskrivning:</label>
          <textarea
            id="description"
            name="description"
            required
            rows="4"
            className="text-black"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <label htmlFor="ends">Slutdatum för Auktion:</label>
          <input
            type="datetime-local"
            id="ends"
            required
            name="ends"
            className="text-black"
            value={ends}
            onChange={(event) => setEndDate(event.target.value)}
          />

          <label htmlFor="minimumBid">Start pris:</label>
          <input
            type="text"
            id="minimumBid"
            required
            name="minimumBid"
            className="text-black"
            value={minimumBid}
            onChange={(event) => setminimumBid(event.target.value)}
          />

          <label htmlFor="price">Utköps pris:</label>
          <input
            type="text"
            id="price"
            required
            name="price"
            className="text-black"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <section className="flex gap-5">
            <div className="flex gap-1">
              <label htmlFor="däggdjur">Däggdjur</label>
              <input
                id="däggdjur"
                type="checkbox"
                checked={däggdjur}
                value="däggdjur"
                onChange={() => setDäggdjur(!däggdjur)}
              />
            </div>

            <div className="flex gap-1">
              <label htmlFor="kräldjur">Kräldjur</label>
              <input
                type="checkbox"
                checked={kräldjur}
                id="kräldjur"
                onChange={() => setKräldjur(!kräldjur)}
              />
            </div>

            <div className="flex gap-1">
              <label htmlFor="fågel">Fågel</label>
              <input
                type="checkbox"
                checked={fågel}
                id="fågel"
                onChange={() => setFågel(!fågel)}
              />
            </div>

            <div className="flex gap-1">
              <label htmlFor="rovdjur">Rovdjur</label>
              <input
                type="checkbox"
                checked={rovdjur}
                id="rovdjur"
                onChange={() => setRovdjur(!rovdjur)}
              />
            </div>
          </section>

          <input
            type="text"
            id="img"
            name="img"
            // required
            className="text-black"
            placeholder="Ange bildens URL"
            value={img}
            onChange={(event) => setImageURL(event.target.value)}
          />

          <button
            type="submit"
            value="Skapa annons"
            className="bg-custom-yellow text-custom-green py-2 px-4 rounded-full cursor-pointer"
          >
            Skapa Annons
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuctionForm;
