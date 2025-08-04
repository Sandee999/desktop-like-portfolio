import { createContext, use, useContext, useState } from "react";
import { AUTHOR_DATA, DEFAULT_APP_DATA } from "@/constants";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [appsData, setAppsData] = useState(DEFAULT_APP_DATA);
  const authorData = AUTHOR_DATA;

  const contextValues = { appsData, setAppsData, authorData };
  
  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);