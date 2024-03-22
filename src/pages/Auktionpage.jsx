export default function Auktionpage() {
  return (
    <>
    

      <h2>Skapa annons</h2>

<form className="bg-custom-grey rounded w-8/12 h-5/6 flex justify-center place-content-center flex-col p-7 m-6 gap-3 text-custom-white" action="#" method="post" enctype="multipart/form-data">
  <label className="bg-custom-yellow h-8 w-60 flex place-content-center items-center rounded-full text-custom-green" for="title">Titel:</label>
  <input type="text" id="title" name="title" required />

  <label for="description">Beskrivning:</label>
  <textarea id="description" name="description" rows="4" required></textarea>

  <label for="contact">Auktions tid:</label>
  <input type="text" id="contact" name="contact" required />

  <label for="contact">Start pris?</label>
  <input type="text" id="contact" name="contact" required/>

  <label for="contact">Utköps pris</label>
  <input type="text" id="contact" name="contact"/>

  <label for="contact">Kategori/Sökord</label>
  <input type="text" id="contact" name="contact"/>

  <label for="image">Bild:</label>
  <input type="file" id="image" name="image" accept="image/*" required />

  <input type="submit" value="Skapa annons" />
</form>
    </>
  );
}

