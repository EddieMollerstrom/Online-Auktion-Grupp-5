import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/ChangeMyName"}>ABOUT</Link>
        <Link to={"/"}>LOCATION</Link>
        <Link to={"/"}>CONTACT</Link>
      </nav>
    </>
  );
}
