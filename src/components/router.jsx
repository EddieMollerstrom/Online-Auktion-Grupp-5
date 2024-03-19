import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Footer />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}
