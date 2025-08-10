import getGithubRawLink from '@/util/getGithubRawLink';

export const AUTHOR_DATA = {
  name: 'Sandeep',
  fullName: 'Talatam Venkata Sandeep',
  phoneNo: '+91 *******520',
  email: 'venkatasandeeptalatam@gmail.com',
  aboutMe: 'https://visiochroma.github.io/About-me',
  github: 'https://github.com/Sandee999',
  linkedin: 'https://www.linkedin.com/in/Sandee999',
  instagram: '',
  resume: 'https://drive.google.com/file/d/1vX47lRo0Cgpu4I-8LjZaOn2SIUgCq9fI',
};

export const DEFAULT_APP_DATA = [
  { title: 'Contacts', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Files', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Figma', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Word', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Notepad', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'VS Code', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Spotify', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { title: 'Chrome', isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
];

export const PROJECTS_DATA = [
  { name: 'Project 1 Portfolio', description: 'Project 1 description', children: [
    { name: 'Github', url: 'https://github.com/Sandee999/desktop-like-portfolio' },
    { name: 'Readme', url: getGithubRawLink({ username: 'Sandee999', repoName: 'desktop-like-portfolio', fileName: 'README.md', branch: 'main' }) },
    { name: 'License', url: getGithubRawLink({ username: 'Sandee999', repoName: 'desktop-like-portfolio', fileName: 'LICENSE', branch: 'main' }) },
  ]},
  { name: 'Project 2 Sehari', description: 'Project 1 description', children: [
    { name: 'Github', url: 'https://github.com/Sandee999/Sehari' },
    { name: 'Readme', url: getGithubRawLink({ username: 'Sandee999', repoName: 'Sehari', fileName: 'README.md', branch: 'main' }) },
    { name: 'License', url: getGithubRawLink({ username: 'Sandee999', repoName: 'Sehari', fileName: 'LICENSE', branch: 'main' }) },
  ]},
  { name: 'Project 3 SmartTrack', description: 'Project 1 description', children: [
    { name: 'Github', url: 'https://github.com/Sandee999/Student-SmartTrack' },
    { name: 'Readme', url: getGithubRawLink({ username: 'Sandee999', repoName: 'Student-SmartTrack', fileName: 'README.md', branch: 'main' }) },
    { name: 'License', url: getGithubRawLink({ username: 'Sandee999', repoName: 'Student-SmartTrack', fileName: 'LICENSE', branch: 'main' }) },
  ]},
];

export const DESKTOP_FILES = [
  { name: 'About Me', icon: require('@/assets/appIcons/googleChrome.png') },
  { name: 'Resume.docx', icon: require('@/assets/appIcons/desktopFilesIcon.png') },
  ...PROJECTS_DATA
];

/*
  The important properties in the FLUID_CURSOR_CONFIG object:

  SIM_RESOLUTION: This controls the resolution of the underlying physics grid for velocity. 
  A lower number (e.g., 64) results in a faster but more blurry, less detailed simulation. 
  A higher number (e.g., 256) creates a more detailed simulation but requires more processing power.

  DYE_RESOLUTION: This sets the resolution for the color (dye) texture. 
  You can often set this higher than SIM_RESOLUTION to get sharp, high-resolution colors on top of a lower-resolution (and faster) physics simulation.

  DENSITY_DISSIPATION & VELOCITY_DISSIPATION: These control how quickly the fluid fades away. Higher values cause the fluid to disappear faster.
  * DENSITY_DISSIPATION makes the colors fade over time.
  * VELOCITY_DISSIPATION makes the motion slow down and stop.

  PRESSURE: This relates to the pressure solver which makes the fluid incompressible. 
  A value close to zero is usually best for a liquid-like effect. Adjusting this can slightly change the fluid's stiffness.

  CURL: This is a crucial one for aesthetics. It controls the amount of small, swirling vortices in the fluid. 
  A higher CURL value will create a much more turbulent, detailed, and smoky appearance.

  SPLAT_RADIUS & SPLAT_FORCE: These define the impact of your mouse or touch.
  * SPLAT_RADIUS is the size of the "splash" you create.
  * SPLAT_FORCE is the strength or intensity of the push you give to the fluid.

  SHADING: This is a simple boolean (true/false) that toggles the lighting effect. 
  When true, the fluid appears to have a slight 3D depth, as if it's being lit from the front. When false, the colors are flat.
 */  

export const FLUID_CURSOR_CONFIG = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1440,
  CAPTURE_RESOLUTION: 1512,
  DENSITY_DISSIPATION: 1,
  VELOCITY_DISSIPATION: 10,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 3,
  SPLAT_RADIUS: 0.07,
  SPLAT_FORCE: 6000,
  SHADING: true,
  COLOR_UPDATE_SPEED: 1,
};