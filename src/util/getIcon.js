export default function getIcon(name) {
  if(name.endsWith('.com')) return require('@/assets/appIcons/googleChrome.png');

  switch(name){
    case 'Contacts': return require('@/assets/appIcons/contacts.png');
    case 'Files': return require('@/assets/appIcons/files.png');
    case 'Figma': return require('@/assets/appIcons/figma.png');
    case 'Word': return require('@/assets/appIcons/word.png');
    case 'Notepad': return require('@/assets/appIcons/notepad.png');
    case 'VS Code': return require('@/assets/appIcons/vscode.png');
    case 'Spotify': return require('@/assets/appIcons/spotify.png');
    case 'Chrome': return require('@/assets/appIcons/googleChrome.png');
    case 'About Me': return require('@/assets/appIcons/googleChrome.png');
    case 'Resume.docx': return require('@/assets/appIcons/desktopFilesIcon.png');
    case 'Github': return require('@/assets/appIcons/github.png');
    case 'Readme': return require('@/assets/appIcons/vscode.png');
    case 'License': return require('@/assets/appIcons/desktopFilesIcon.png');
    default: return require('@/assets/appIcons/desktopFolderIcon.png');
  }
}