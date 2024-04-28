import { Link } from "react-router-dom";

export default function MyPagesSidebar() {
  return (
    <>
      <nav className="bg-custom-green text-custom-white flex flex-col">
        <Link to={"/MyPages"}>
          <span className="material-symbols-outlined">home</span>ÖVERSIKT
        </Link>
        <Link to={"/MyPages/SavedObjects"}>
          <span className="material-symbols-outlined">bookmark</span>SPARADE
          ANNONSER
        </Link>
        <Link to={"/MyPages/Myobjects"}>
          <span class="material-symbols-outlined">sell</span>MINA ANNONSER
        </Link>
        <Link to={"/ChangeMyName"}>
          <span className="material-symbols-outlined">autorenew</span>
          BUDGIVNINGAR
        </Link>
        <Link to={"/ChangeMyName"}>
          <span className="material-symbols-outlined">shopping_cart</span>DINA
          KÖP
        </Link>
        <Link to={"/Auktionpage"}>
          <span className="material-symbols-outlined">add_circle</span>SKAPA NY
          ANNONS
        </Link>
        <Link to={"/MyPages/SoldObjects"}>
          <span className="material-symbols-outlined">done</span>DINA SÅLDA
        </Link>
      </nav>
    </>
  );
}
