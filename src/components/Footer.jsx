import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-custom-green pt-10">
        <section className="flex justify-around">
          <section className="text-custom-yellow font-bold">
            <h3>
              <Link to={"/"}>HEM</Link>
            </h3>
            <h3>
              <Link to={"/"}>OM OSS</Link>
            </h3>
            <h3>
              <Link to={"/"}>MINA SIDOR</Link>
            </h3>
            <h3>
              <Link to={"/"}>LOGGA IN</Link>
            </h3>
          </section>
          <section className="text-custom-yellow text-center font-medium">
            <p>ADRESS: 123 AUCTION AVENUE, SUITE 500</p>
            <p>CYBER CITY, DIGITAL DISTRICT</p>
            <p>TEKNO TOWN, 54321</p>
            <p>VIRTUELLA STATERNA</p>
          </section>
          <section className="text-custom-yellow pb-2">
            <img
              className="w-20"
              src="../public/images/hammer.png"
              alt="gul hammare"
            />
            <p className="font-bold">E-HAMMER</p>
            <p id="hammer-slogan" className="font-bold">
              WE HAMMER HARD
            </p>
          </section>
        </section>
        <section className="text-custom-white border-t-2 border-custom-white flex justify-center mt-5">
          <p>COPYRIGHT&copy; 2024 E-HAMMER. ALLA RÄTTIGHETER FÖRBEHÅLLNA</p>
        </section>
      </footer>
    </>
  );
}
