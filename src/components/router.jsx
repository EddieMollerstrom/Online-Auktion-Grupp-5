import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Home from "../pages/Home.jsx";
import ChangeMyName from "../pages/ChangeMyName.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Footer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChangeMyName" element={<ChangeMyName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
