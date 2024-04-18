import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auktionpage from "../pages/Auktionpage.jsx";
import AppLayout from "../AppLayout.jsx";
import ProductInfoPage from "../pages/Product-info-page.jsx";
import Contact from "../pages/Contact.jsx";
import MyPages from "../pages/MyPages.jsx";
import MyPagesAppLayout from "../MyPagesAppLayout.jsx";
import Myobjects from "../pages/Myobjects.jsx";
import MyPagesSavedObjects from "../pages/MyPagesSaved.jsx";
import LoginSignup from "../pages/LoginSignup.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import CartProvider from "../pages/CartContext.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/product-info/:productId"
              element={<ProductInfoPage />}
            />
            <Route path="/Auktionpage" element={<Auktionpage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/MyPages" element={<MyPagesAppLayout />}>
              <Route index element={<MyPages />} />
              <Route path="/MyPages/Myobjects" element={<Myobjects  />} />
              <Route
                path="/MyPages/SavedObjects"
                element={<MyPagesSavedObjects />}
              />
            </Route>
            <Route path="/LoginSignup" element={<LoginSignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
