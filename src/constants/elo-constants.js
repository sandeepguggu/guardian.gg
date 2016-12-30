const LEAGUES = {
  bronze: [0, 1099],
  silver: [1100, 1299],
  gold: [1300, 1499],
  platinum: [1500, 1699],
  diamond: [1700, 99999]
};

const COLORS = {
  placing: 'rgb(156, 156, 156)',
  bronze: 'rgb(179, 148, 113)',
  silver: 'rgb(179, 179, 179)',
  gold: 'rgb(177, 154, 92)',
  platinum: 'rgb(98, 130, 123)',
  diamond: 'rgb(113, 152, 183)'
};

const HEADER_COLORS = {
  placing: 'rgb(138, 138, 138)',
  bronze: 'rgba(162, 124, 78, 0.498039)',
  silver: 'rgba(204, 214, 209, 0.498039)',
  gold: 'rgba(231, 194, 68, 0.498039)',
  platinum: 'rgba(77, 158, 130, 0.498039)',
  diamond: 'rgba(75, 139, 189, 0.498039)'
};

export {
  LEAGUES,
  COLORS,
  HEADER_COLORS
};
