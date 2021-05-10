import { useMutation } from '@apollo/client';
import { Button, CircularProgress } from '@material-ui/core';
import { GET_USER_INFO, LOGOUT, SET_MOVIE_LIST } from 'gql/mutation';

import React, { useCallback, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState, message, userData } from 'store/atom';
import { useChangeLoggedState } from 'store/hook';
import styled from 'styled-components';

const User = styled.div`
  cursor: pointer;
  display: flex;
`;

const Image = styled.div`
  border-radius: 40px;
  margin-left: 12px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  transition: broder 0.125s ease;
  &:hover {
    border: 3px solid #e50914;
  }
  img {
    width: 100%;
    display: block;
  }
`;
const Name = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 300;
  height: 40px;
  font-size: 24px;
`;

function UserProfile(props) {
  const [msg, setMsg] = useRecoilState(message);
  const [me, { error, loading }] = useMutation(GET_USER_INFO);
  const changeState = useChangeLoggedState();
  const isLoggedIn = useRecoilValue(loginState);
  const [logout] = useMutation(LOGOUT);
  const [addFoviesMovie] = useMutation(SET_MOVIE_LIST);
  const [userInfo, setUserInfo] = useRecoilState(userData);
  const isTouched = useRef(false);

  //因為需要在每次登入都重新呼叫查詢方法
  //所以先將findme做成mutatio
  const fetchData = useCallback(async () => {
    try {
      const { data } = await me();
      setUserInfo(data.me);
    } catch (error) {
      console.log(error);
    }
  }, [me]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (isTouched.current) {
      try {
        addFoviesMovie({
          variables: {
            favorite_movies: userInfo.favorite_movies,
          },
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      isTouched.current = true;
    }
  }, [userInfo.favorite_movies]);

  const logoutFun = async () => {
    try {
      const { data } = await logout();
      if (data.logout) {
        localStorage.removeItem('token');
        changeState();
        setUserInfo({ username: '', avatar: '', favorite_movies: [] });
        setMsg('您已經登出');
        props.history.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <User>
      <Button onClick={logoutFun} color="secondary">
        登出
      </Button>
      <Name>{userInfo.username}</Name>
      <Image>
        <img src={userInfo.avatar} alt="profile" />
      </Image>
    </User>
  );
}

export default withRouter(UserProfile);
