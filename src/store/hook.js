import { useRecoilState } from 'recoil';
import { loginState, userData } from './atom';

const useChangeLoggedState = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return () => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  };
};

const useSetMoviesList = () => {
  const [useData, setUseData] = useRecoilState(userData);
  const { favorite_movies } = useData;
  return (isToggle, movie_id) => {
    if (isToggle) {
      setUseData({
        ...useData,
        favorite_movies: favorite_movies.concat(movie_id),
      });
    } else {
      setUseData({
        ...useData,
        favorite_movies: favorite_movies.filter((id) => id !== movie_id),
      });
    }
  };
};

export { useChangeLoggedState, useSetMoviesList };
