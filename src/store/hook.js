import { useRecoilState } from 'recoil';
import { loginState } from './atom';

export const useChangeLoggedState = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return () => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  };
};
