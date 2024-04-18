import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Globalcontext.jsx";

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);
  useEffect(() => {
    fetch("/api/login")
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.isLoggedIn);
      })
      .catch((error) => {
        console.error("Error fetching login status:", error);
      });
  }, [isLoggedIn]);

  const handleLogout = () => {
    fetch("/api/login", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(null);
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
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-custom-yellow h-12 w-40 flex place-content-center items-center rounded-full text-custom-green"
            >
              Logga Ut
            </button>
          ) : (
            // Render login link if user is not logged in
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
