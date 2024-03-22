import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ChangeMyName from "../pages/ChangeMyName.jsx";
import AppLayout from "../AppLayout.jsx";
import ProductInfoPage from "../pages/Product-info-page.jsx";
import Contact from "../pages/Contact.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/ChangeMyName" element={<ChangeMyName />} />
            <Route path="/product-info" element={<ProductInfoPage />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
