import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MyPagesSidebar from "./components/MyPagesSidebar.jsx";

export default function MyPagesAppLayout() {
  return (
    <>
      <div className="myPagesContainer">
        <MyPagesSidebar />
        <Outlet />
      </div>
    </>
  );
}
