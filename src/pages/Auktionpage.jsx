export default function Auktionpage() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4 text-center">Skapa annons</h2>

      <div className="flex justify-center min-h-screen p-4">
        <form className="bg-custom-grey rounded w-8/12 flex flex-col p-7 gap-3 text-custom-white annonscontainer" action="#" method="post" enctype="multipart/form-data">
          <label  htmlFor="title">Titel:</label>
          <input type="text" id="title" name="title" required className="text-black" />

          <label htmlFor="description">Beskrivning:</label>
          <textarea id="description" name="description" rows="4" required className="text-black"></textarea>

          <label htmlFor="contact">Auktions tid:</label>
          <input type="text" id="contact" name="contact" required className="text-black" />

          <label htmlFor="contact">Start pris:</label>
          <input type="text" id="contact" name="contact" required className="text-black" />

          <label htmlFor="contact">Utköps pris?:</label>
          <input type="text" id="contact" name="contact" className="text-black" />

          <label htmlFor="contact">Kategori/Sökord:</label>
          <input type="text" id="contact" name="contact" className="text-black" />

          <label htmlFor="image" className="bg-custom-yellow h-8 w-60 flex justify-center items-center rounded-full text-custom-green cursor-pointer">Bild</label>
          <input type="file" id="image" name="image" accept="image/*" required className="hidden"/>

          <input type="submit" value="Skapa annons" className="bg-custom-yellow text-custom-green py-2 px-4 rounded-full cursor-pointer" />
        </form>
      </div>
    </>
  );
}

