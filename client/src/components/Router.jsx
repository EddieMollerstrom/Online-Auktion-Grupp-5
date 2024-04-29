import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Pages
import Home, { fetchProducts } from "../pages/Home.jsx";
import Auktionpage from "../pages/Auktionpage.jsx";
import ProductInfoPage from "../pages/Product-info-page.jsx";
import Contact from "../pages/Contact.jsx";
import MyPages from "../pages/MyPages.jsx";
import Myobjects from "../pages/Myobjects.jsx";
import MyPagesSavedObjects from "../pages/MyPagesSaved.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import LoginSignup from "../pages/LoginSignup.jsx";
import NotFound from "../pages/NotFound.jsx";
import Checkout from "../pages/Checkout.jsx";


//Components
import AppLayout from "../AppLayout.jsx";
import MyPagesAppLayout from "../MyPagesAppLayout.jsx";
import ProtectedRoutes, { fetchUserData } from "./ProtectedRoutes.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} loader={fetchProducts} />
      <Route path="/product-info/:productId" element={<ProductInfoPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AboutUs" element={<AboutUs />} />

      <Route element={<ProtectedRoutes />} loader={fetchUserData}>
        <Route path="/Auktionpage" element={<Auktionpage />} />
        <Route path="/MyPages" element={<MyPagesAppLayout />}>
          <Route index element={<MyPages />} />
          <Route path="/MyPages/Myobjects" element={<Myobjects />} />
          <Route
            path="/MyPages/SavedObjects"
            element={<MyPagesSavedObjects />}
          />
        </Route>
        <Route path="/Checkout" element={<Checkout />} />
      </Route>

      <Route path="/LoginSignup" element={<LoginSignup />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
