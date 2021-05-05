import { useMutation, useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import { LOGOUT, SET_MOVIE_LIST } from 'gql/mutation';
import { GET_USER_INFO } from 'gql/query';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { message, myList } from 'store/atom';
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

const url =
  'https://www.gravatar.com/avatar/a10d2dadfe08fb12f57abc0c82f74554.jpg?d=identicon';
function UserProfile(props) {
  const [me, setMe] = useState({ username: '', favorite_movies: [] });
  const [movieList, setMovieList] = useRecoilState(myList);
  const [msg, setMsg] = useRecoilState(message);
  const { data, error, loading } = useQuery(GET_USER_INFO);
  const changeState = useChangeLoggedState();
  const [logout] = useMutation(LOGOUT);
  const [addFoviesMovie] = useMutation(SET_MOVIE_LIST);
  useEffect(() => {
    if (!error && !loading) {
      const { me } = data;
      setMe(data.me);
      setMovieList(me.favorite_movies);
    }
  }, [data]);

  useEffect(() => {
    try {
      addFoviesMovie({
        variables: {
          favorite_movies: movieList,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, [movieList]);

  const logoutFun = async () => {
    try {
      const { data } = await logout();
      if (data.logout) {
        localStorage.removeItem('token');
        changeState();
        setMsg('您已經登出');
        props.history.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <User>
      <Button onClick={logoutFun} color="secondary">
        登出
      </Button>
      <Name>{me.username}</Name>
      <Image>
        <img src={url} alt="profile" />
      </Image>
    </User>
  );
}

export default withRouter(UserProfile);
