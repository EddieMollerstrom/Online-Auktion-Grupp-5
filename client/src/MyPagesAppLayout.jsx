import { Outlet } from "react-router-dom";
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
