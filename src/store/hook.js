import { useRecoilState } from 'recoil';
import { loginState, myList } from './atom';

const useChangeLoggedState = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return () => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  };
};

const useSetMoviesList = () => {
  const [movieList, setMovieList] = useRecoilState(myList);
  return (isToggle, movie_id) => {
    if (isToggle) {
      setMovieList(movieList.concat(movie_id));
    } else {
      setMovieList(movieList.filter((id) => id !== movie_id));
    }
  };
};

export { useChangeLoggedState, useSetMoviesList };
