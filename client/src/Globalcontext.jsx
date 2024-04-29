import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(""); // Change variable name

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/userSession");
        const data = await response.json();
        console.log(data);
        setIsLoggedIn(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSession();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
