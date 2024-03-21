import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-custom-green flex place-content-between h-100 px-44 items-center">
        <Link to={"/"} id="logo" className="text-custom-yellow font-bold">
          E-HAMMER
        </Link>
        <nav className="flex place-content-around font-bold text-custom-white items-center">
          <Link to={"/ChangeMyName"}>Skapa annons</Link>
          <Link to={"/"}>Om oss</Link>
          <Link to={"/Contact"}>Kontakt</Link>
          <Link to={"/"}>Mina sidor</Link>
          <Link
            to={"/LoginSignup"}
            className="bg-custom-yellow h-12 w-40 flex place-content-center items-center rounded-full text-custom-green"
          >
            Logga In
          </Link>
        </nav>
      </header>
    </>
  );
}
