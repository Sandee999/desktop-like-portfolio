import { AUTHOR_DATA } from "@/constants";
import { useEffect, useMemo } from "react";

export default function useResetClosedApps({ globalContext }) {
  const { appsData, setOpenFile, setChromeLink, setNotepadLink, setVscodeLink } = globalContext;

  // Create a lookup table for quick access
  const appStatus = useMemo(() => {
    const status = {};
    appsData.forEach(app => {
      status[app.title] = !!app.isActive;
    });
    return status;
  }, [appsData]);

  useEffect(() => {
    if (!appStatus["Files"]) setOpenFile("");
  }, [appStatus["Files"], setOpenFile]);

  useEffect(() => {
    if (!appStatus["Chrome"]) setChromeLink(AUTHOR_DATA.aboutMe);
  }, [appStatus["Chrome"], setChromeLink]);

  useEffect(() => {
    if (!appStatus["Notepad"]) setNotepadLink("");
  }, [appStatus["Notepad"], setNotepadLink]);

  useEffect(() => {
    if (!appStatus["VS Code"]) setVscodeLink("");
  }, [appStatus["VS Code"], setVscodeLink]);
}
