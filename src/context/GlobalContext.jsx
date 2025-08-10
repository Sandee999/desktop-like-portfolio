import { createContext, useContext, useState } from "react";
import { AUTHOR_DATA, DEFAULT_APP_DATA } from "@/constants";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [appsData, setAppsData] = useState(DEFAULT_APP_DATA);
  const [openFile, setOpenFile] = useState('');
  const [chromeLink, setChromeLink] = useState(AUTHOR_DATA.aboutMe);
  const [notepadLink, setNotepadLink] = useState('');
  const [vscodeLink, setVscodeLink] = useState('');

  const contextValues = { 
    appsData, setAppsData, 
    openFile, setOpenFile,
    chromeLink, setChromeLink, 
    notepadLink, setNotepadLink,
    vscodeLink, setVscodeLink,
  };
  
  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);