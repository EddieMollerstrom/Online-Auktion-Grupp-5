import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auktionpage from "../pages/Auktionpage.jsx";
import AppLayout from "../AppLayout.jsx";
import Contact from "../pages/Contact.jsx";


export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/Auktionpage" element={<Auktionpage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
