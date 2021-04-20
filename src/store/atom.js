const { atom } = require('recoil');

const areasInfo = atom({
  key: 'areas',
  default: [],
});

const theaterInfo = atom({
  key: 'theaters',
  default: [],
});

export { areasInfo, theaterInfo };
