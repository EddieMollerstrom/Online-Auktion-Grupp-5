import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ChangeMyName from "../pages/ChangeMyName.jsx";
import AppLayout from "../AppLayout.jsx";
import Contact from "../pages/Contact.jsx";
import MyPages from "../pages/MyPages.jsx";
import MyPagesAppLayout from "../MyPagesAppLayout.jsx";
import Myobjects from "../pages/Myobjects.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/ChangeMyName" element={<ChangeMyName />} />
            <Route path="/Contact" element={<Contact />} />
            
            <Route path="/MyPages" element={<MyPagesAppLayout />}>
              <Route index element={<MyPages />} />
              <Route path="/MyPages/Myobjects" element={<Myobjects  />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
