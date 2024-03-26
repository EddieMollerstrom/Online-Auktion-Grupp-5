export default function MyPages() {
  const user = {
    firstName: "Jakob",
    lastName: "Olsson",
    currentSales: [1, 2, 3, 4, 5],
    sold: [1, 2, 3],
    notSold: [1],
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">
          Välkommen {user.firstName}!
        </h2>
        <p className="text-custom-green">Det här är dina sidor.</p>

        <div className="overview border-4 border-custom-green">
          <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
            Försäljningsöversikt
          </div>
          <div className="activeWrapper w-full flex text-center text-custom-gry">
            <section className="flex justify-center items-center">
              {user.currentSales.length}
              <br />
              AKTIVA
            </section>
            <section className="flex justify-center items-center">
              {user.sold.length}
              <br />
              SÅLDA
            </section>
            <section className="flex justify-center items-center">
              {user.notSold.length}
              <br />
              EJ SÅLDA
            </section>
          </div>
        </div>

        <div className="overview border-4 border-custom-green">
          <div className="head border-b-[3px] border-custom-green"></div>
        </div>
      </section>
    </>
  );
}
