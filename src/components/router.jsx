import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Home from "../pages/Home.jsx";
import ChangeMyName from "../pages/ChangeMyName.jsx";
import AppLayout from "../AppLayout.jsx";
import LoginSignup from "../pages/LoginSignup.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/ChangeMyName" element={<ChangeMyName />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
