import { useMutation, useQuery } from '@apollo/client';
import Search from 'components/common/Search';
import { LOGOUT } from 'gql/mutation';
import { GET_MOVIES, GET_USER_INFO } from 'gql/query';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movies, loginState } from 'store/atom';
import styled from 'styled-components';
import Navgation from './Navgation';
import UserProfile from './UserProfile';

const Profile = styled.div`
  margin-left: auto;
  a {
    margin-left: 12px;
  }
`;

const StyledHeader = styled.header`
  background: linear-gradient(to bottom, black 0%, transparent 100%);
  display: flex;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;
`;

const SearchDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  pointer-events: none;
`;

function Header() {
  const { data, error, loading } = useQuery(GET_MOVIES, {
    variables: {
      date: '2021-3-24',
    },
  });
  const userData = useQuery(GET_USER_INFO);

  const { pathname } = useLocation();
  const isLoggedIn = useRecoilValue(loginState);

  const [movieData, setMovieData] = useRecoilState(movies);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    if (!error && !loading) {
      setMovieData(data.queryMoviesByDate);
      setTempList(data.queryMoviesByDate);
    }
  }, [data, error, loading]);

  const findMovies = (e) => {
    if (!e.target.value) {
      setMovieData(tempList);
      return;
    }
    const newMovies = movieData.filter(({ title }) =>
      title.includes(e.target.value)
    );
    setMovieData(newMovies);
  };
  const url =
    'https://www.gravatar.com/avatar/a10d2dadfe08fb12f57abc0c82f74554.jpg?d=identicon';
  return (
    <StyledHeader>
      <Navgation />
      {pathname === '/' && (
        <SearchDiv>
          <Search
            text="search movie title"
            width="20"
            searchEvent={findMovies}
          />
        </SearchDiv>
      )}
      <Profile>
        {isLoggedIn ? (
          <UserProfile name={userData.data.me.username} url={url} />
        ) : (
          <>
            <Link to="/singUp">註冊</Link>
            <Link to="/singIn">登入</Link>
          </>
        )}
      </Profile>
    </StyledHeader>
  );
}

export default withRouter(Header);
