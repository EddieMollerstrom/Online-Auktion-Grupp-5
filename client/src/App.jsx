import { RouterProvider } from "react-router-dom";
import Router from "./components/Router.jsx";
import { GlobalProvider } from "./Globalcontext.jsx";

function App() {
  return (
    <>
      <GlobalProvider>
        <RouterProvider router={Router} />
      </GlobalProvider>
    </>
  );
}

export default App;
