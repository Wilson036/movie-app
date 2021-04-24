const { atom } = require('recoil');

const areasInfo = atom({
  key: 'areas',
  default: [],
});

const theaterInfo = atom({
  key: 'theaters',
  default: [],
});

const movies = atom({
  key: 'movies',
  default: [],
});

export { areasInfo, theaterInfo, movies };
