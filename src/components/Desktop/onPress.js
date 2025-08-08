export default function onPress(name, authorData, appsData, setAppsData, setChromeLink) {
  switch(name) {
    case 'About Me':
      forAboutMe(authorData, setAppsData, setChromeLink);
      break;
    case 'Resume.docx':
      forResume(setAppsData);
      break;
    default:
      break;
  }
}

function forAboutMe(authorData, setAppsData, setChromeLink) {
  setChromeLink(authorData.aboutMe);
  setAppsData((prevData) => {
    const index = prevData.findIndex((data) => data.title === 'Chrome');
    const newData = [...prevData];
    if(!prevData[index].isActive){
        newData[index].isActive = true;
      } else if(prevData[index].zIndex === 50 || prevData[index].isHidden) {
        newData[index].isHidden = !prevData[index].isHidden;
      }
      newData.forEach((value)=> value.zIndex=40 );
      newData[index].zIndex = 50;
      return newData;
  });
}

function forResume(setAppsData) {
    setAppsData((prevData) => {
    const index = prevData.findIndex((data) => data.title === 'Word');
    const newData = [...prevData];
    if(!prevData[index].isActive){
        newData[index].isActive = true;
      } else if(prevData[index].zIndex === 50 || prevData[index].isHidden) {
        newData[index].isHidden = !prevData[index].isHidden;
      }
      newData.forEach((value)=> value.zIndex=40 );
      newData[index].zIndex = 50;
      return newData;
  });
}