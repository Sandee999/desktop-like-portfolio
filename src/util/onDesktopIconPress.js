import { router } from "expo-router";

export default function onDesktopIconPress({ file, authorData, setAppsData, setChromeLink, setOpenFile }) {
  let appName = null;
  
  switch(file.name) {
    case 'About Me':
      setChromeLink(authorData.aboutMe);
      appName = 'Chrome';
      break;
    case 'Resume.docx':
      appName = 'Word';
      break;
    case 'Github':
      router.navigate(file.url);
      return;
    case 'Readme':
    case 'License':
      // appName = 'Notepad';
      return;
    default:
      setOpenFile(file.name);
      appName = 'Files';
      break;
  }
  
  // Open App
  setAppsData((prevData) => {
    const index = prevData.findIndex((data) => data.title === appName);
    const newData = [...prevData];
    if(!prevData[index].isActive){
      newData[index].isActive = true;
    } else if(prevData[index].isHidden) {
      newData[index].isHidden = !prevData[index].isHidden;
    }
    newData.forEach((value)=> value.zIndex=40 );
    newData[index].zIndex = 50;
    return newData;
  });
}