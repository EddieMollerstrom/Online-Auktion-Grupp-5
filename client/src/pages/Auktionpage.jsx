import React, { useState } from "react";

function AuctionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ends, setEndDate] = useState("");
  const [minimumBid, setminimumBid] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImageURL] = useState("");

  const formData = {
    title,
    description,
    ends,
    minimumBid,
    price,
    category,
    img,
  };

  const handleSubmit = async (event) => {
    try {
      const response = await fetch(`/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        
        console.log(result);
        window.location.reload();
      } else {
        console.log('statuskod:', response);
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }


    event.preventDefault();
  };

  const animalCategories = [
    { category: "Horse", tags: "horse" },
    { category: "Cat", tags: "cat" },
    { category: "Dog", tags: "dog" },
    { category: "Others", tags: "others" }
  ];

  const handleCheckboxChange = (category) => {
    // Toggle category selection
    if (categories.includes(category)) {
      setCategories(categories.filter((cat) => cat !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className="w-8/12">
        <h2 className="text-2xl font-bold text-center mb-4">Skapa annons</h2>
        <form className="bg-custom-grey rounded flex flex-col p-7 gap-3 text-custom-white annonscontainer" encType="multipart/form-data">
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="text-black"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />


          <label htmlFor="description">Beskrivning:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="text-black"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <label htmlFor="ends">Slutdatum för Auktion:</label>

          <label htmlFor="endDate">Slutdatum för Auktion:</label>
          <input
            type="datetime-local"
            id="ends"
            name="ends"
            className="text-black"
            value={ends}
            onChange={(event) => setEndDate(event.target.value)}
          />

          <label htmlFor="minimumBid">Start pris:</label>
          <input
            type="text"
            id="minimumBid"
            name="minimumBid"
            className="text-black"
            value={minimumBid}
            onChange={(event) => setminimumBid(event.target.value)}
          />

          <label htmlFor="price">Utköps pris:</label>
          <input
            type="text"
            id="price"
            name="price"
            className="text-black"
            value={price}
            onChange={(event) => setprice(event.target.value)}
          />

          <label>Kategori/Sökord:</label>
          <div>
            {animalCategories.map((animal, index) => (
              <div key={index}>
                <label htmlFor={animal.tag}>{animal.category}</label>
                <input
                  type="checkbox"
                  id={animal.tag}
                  name="category"
                  value={animal.category}
                  checked={categories.includes(animal.category)}
                  onChange={() => handleCheckboxChange(animal.category)}
                />
              </div>
            ))}
          </div>

          <input
            type="text"
            id="img"
            name="img"
            className="text-black, p-2"
            placeholder="Ange bildens URL"
            value={img}
            onChange={(event) => setImageURL(event.target.value)}
          />


          <input
            type="button"
            onClick={handleSubmit}
            value="Skapa annons"
            className="bg-custom-yellow text-custom-green py-2 px-4 rounded-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default AuctionForm;
