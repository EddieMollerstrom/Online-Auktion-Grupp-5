export default function ProductInfoComponent() {
  return (
    <>
      <section
        id="product-container"
        className="flex justify-around align-middle mt-16 mb-20"
      >
        <section className="w-80">
          <img
            src="../public/images/giraffe.jpg"
            alt="häst med lång hals"
            className="w-80 h-80"
          />

          <div className="mt-12 text-lg">
            <h3 className="font-bold">Beskrivning:</h3>
            <p className="text-base">
              Häst |&nbsp; Lång |&nbsp; Orange |&nbsp; Oanvänd |&nbsp; Prickig
            </p>
            <p className="mt-6">
              Giraffer är idisslare, precis som nötkreatur och andra hovdjur,
              och deras mage har fyra delar, med mat som passerar genom den
              första och vatten går direkt till den andra.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-between">
          <div className="flex flex-col justify-between  h-80 w-80">
            <div>
              <p>Mån 18 mar 12:59</p>
              <h2 className="font-bold text-3xl">Häst med lång hals</h2>
              <p className="font-medium text-lg">Slutpris |&nbsp; 248 Bud</p>
              <h2 className="font-bold mb-8 text-3xl">98 543 kr</h2>
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
              <p>Tis 19 mar 12:00</p>
            </div>
            <div className="border-b-2 flex justify-between gap-20 border-black">
              <p>Frakt</p>
              <p>18 kr Frimärken</p>
            </div>
            <div className="border-b-2 flex justify-between gap-20 border-black">
              <p>Betalning</p>
              <p>Swish</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
