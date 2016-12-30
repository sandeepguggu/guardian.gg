const ACTIVITY = {
  skirmish: 9,
  control: 10,
  salvage: 11,
  clash: 12,
  rumble: 13,
  osiris: 14,
  doubles: 15,
  ironBanner: 19,
  elimination: 23,
  rift: 24,
  supremacy: 34
};

const ACTIVITY_TITLES = {
  [ACTIVITY['skirmish']]: 'Skirmish',
  [ACTIVITY['control']]: 'Control',
  [ACTIVITY['salvage']]: 'Salvage',
  [ACTIVITY['clash']]: 'Clash',
  [ACTIVITY['rumble']]: 'Rumble',
  [ACTIVITY['osiris']]: 'Trials of Osiris',
  [ACTIVITY['doubles']]: 'Doubles',
  [ACTIVITY['ironBanner']]: 'Iron Banner',
  [ACTIVITY['elimination']]: 'Elimination',
  [ACTIVITY['rift']]: 'Rift',
  [ACTIVITY['supremacy']]: 'Supremacy'
};

const ACTIVITY_ICONS = {
  [ACTIVITY['skirmish']]: 'ggg-skirmish',
  [ACTIVITY['control']]: 'ggg-control',
  [ACTIVITY['salvage']]: 'ggg-salvage',
  [ACTIVITY['clash']]: 'ggg-clash',
  [ACTIVITY['rumble']]: 'ggg-rumble',
  [ACTIVITY['osiris']]: 'ggg-osiris',
  [ACTIVITY['doubles']]: 'ggg-doubles',
  [ACTIVITY['ironBanner']]: 'ggg-iron-banner',
  [ACTIVITY['elimination']]: 'ggg-elimination',
  [ACTIVITY['rift']]: 'ggg-rift',
  [ACTIVITY['supremacy']]: 'ggg-supremacy'
};

export {
  ACTIVITY,
  ACTIVITY_TITLES,
  ACTIVITY_ICONS
};
