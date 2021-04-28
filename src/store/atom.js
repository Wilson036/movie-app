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

const loginState = atom({
  key: 'isLoggedIn',
  default: !!localStorage.getItem('token'),
});

export { areasInfo, theaterInfo, movies, loginState };
