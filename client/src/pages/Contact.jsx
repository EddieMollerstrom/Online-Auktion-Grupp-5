export default function Contact() {
  return (
    <>
      <div
        id="contactMainContainer"
        className="flex justify-center items-center"
      >
        <div
          id="contactContainer"
          className="bg-custom-green rounded-2xl flex justify-center items-center gap-10"
        >
          <section id="formContainer" className="">
            <h2 className="font-bold text-custom-white">Säg hej till oss!</h2>
            <form method="post">
              <input
                type="text"
                name="name"
                placeholder="Förnamn"
                className="bg-custom-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Efternamn"
                className="bg-custom-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-custom-white"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Telefon"
                className="bg-custom-white"
              />
              <textarea
                name="text"
                cols="30"
                rows="10"
                placeholder="Meddelande"
              ></textarea>
              <input
                className="bg-custom-yellow text-custom-green font-bold"
                value="SKICKA"
              ></input>
            </form>
          </section>
          <section id="infoContainer" className="">
            <h2 className="font-bold text-custom-white">Kontakt information</h2>
            <p className="text-custom-yellow">
              Adress: 123 Auction Avenue, Suite 500
              <br />
              Cyber City, Digital District
              <br />
              Tekno Town, 54321
              <br />
              Virtuella Staterna
            </p>
            <p className="text-custom-yellow">Telefon: +1 (555) 555-5555</p>
          </section>
        </div>
      </div>
    </>
  );
}
