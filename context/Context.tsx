import { useState, useEffect, createContext } from "react";

const Context = createContext(null);
//<string | null>

function ContextProvider({ children }) {
  const [deneme, setDeneme] = useState("experiment");
  const [asd, setAsd] = useState("asd");

  return (
    <Context.Provider value={{ deneme, asd }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
