export default function onPress(name, authorData, appsData, setAppsData, setChromeLink) {
  switch(name) {
    case 'About Me':
      forAboutMe(name, authorData, appsData, setAppsData, setChromeLink);
      break;
    default:
      break;
  }
}

function forAboutMe(name, authorData, appsData, setAppsData, setChromeLink) {
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