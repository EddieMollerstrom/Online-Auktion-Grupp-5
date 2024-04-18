import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/login/");
        setLoggedIn(true);

        return res.json();
      } catch (error) {
        console.error("fel vid fetch", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    console.log("TEST");
    fetch("/api/logout")
      .then((res) => res.json())
      .then((data) => {
        setLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <>
      <header className="bg-custom-green flex place-content-between h-100 px-44 items-center">
        <Link to={"/"} id="logo" className="text-custom-yellow font-bold">
          E-HAMMER
        </Link>
        <nav className="flex place-content-around font-bold text-custom-white items-center">
          <Link to={"/Auktionpage"}>Skapa annons</Link>
          <Link to={"/AboutUs"}>Om oss</Link>
          <Link to={"/Contact"}>Kontakt</Link>
          <Link to={"/MyPages"}>Mina sidor</Link>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-custom-yellow h-12 w-40 flex place-content-center items-center rounded-full text-custom-green"
            >
              Logga Ut
            </button>
          ) : (
            <Link
              to={"/LoginSignup"}
              className="bg-custom-yellow h-12 w-40 flex place-content-center items-center rounded-full text-custom-green"
            >
              Logga In
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
