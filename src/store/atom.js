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

const message = atom({
  key: 'message',
  default: '',
});

const myList = atom({
  key: 'mylist',
  default: [],
});

const userData = atom({
  key: 'userData',
  default: { username: '', avatar: '', favorite_movies: [] },
});

export {
  areasInfo,
  theaterInfo,
  movies,
  loginState,
  message,
  myList,
  userData,
};
