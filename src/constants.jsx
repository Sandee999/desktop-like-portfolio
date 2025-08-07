export const AUTHOR_DATA = {
  name: 'Siddu',
  github: 'https://github.com/siddu2317',
  linkedin: 'https://www.linkedin.com/in/saikrishna-siddu-3b8716256',
  email: 'saikrishnasiddu14@gmail.com',
  instagram: 'https://www.instagram.com/sai_krishna_siddu/',
};

export const DEFAULT_APP_DATA = [
  { id: 1, title: 'Contacts', icon: require('@/assets/DockIcons/contacts.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 2, title: 'Files', icon: require('@/assets/DockIcons/files.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 3, title: 'Figma', icon: require('@/assets/DockIcons/figma.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 4, title: 'Word', icon: require('@/assets/DockIcons/word.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 5, title: 'Excel', icon: require('@/assets/DockIcons/excel.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 6, title: 'PowerPoint', icon: require('@/assets/DockIcons/powerpoint.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 7, title: 'Spotify', icon: require('@/assets/DockIcons/spotify.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
  { id: 8, title: 'Chrome', icon: require('@/assets/DockIcons/googleChrome.png'), isActive: false, isMaximized: false, isHidden: false, zIndex: 40 },
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

export const VOLUME_ICONS = [
  require('@/assets/statusBar/mute.png'),
  require('@/assets/statusBar/low-volume.png'),
  require('@/assets/statusBar/high-volume.png'),
];