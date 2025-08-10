import { openURL } from "expo-linking"; 

export default function onDesktopIconPress({ file, authorData, globalContext }) {
  let appName = null;
  
  if(file.name.endsWith('.com')) {
    globalContext.setChromeLink(file.url);
    appName = 'Chrome';
    globalContext.appsData.find(app => app.title === appName).isMaximized = true;
    openApp(appName, globalContext);
    return;
  }

  switch(file.name) {
    case 'About Me':
      globalContext.setChromeLink(authorData.aboutMe);
      appName = 'Chrome';
      break;
    case 'Resume.docx':
      appName = 'Word';
      break;
    case 'Github':
      openURL(file.url);
      return;
    case 'Readme':
      globalContext.setVscodeLink(file.url);
      appName = 'VS Code';
      break;
    case 'License':
      globalContext.setNotepadLink(file.url);
      appName = 'Notepad';
      break;
    default:
      globalContext.setOpenFile(file.name);
      appName = 'Files';
      break;
  }
  
  openApp(appName, globalContext);
}

function openApp(appName, globalContext) {
  globalContext.setAppsData((prevData) => {
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