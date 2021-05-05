import { useMutation, useQuery } from '@apollo/client';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Search from 'components/common/Search';
import { GET_MOVIES, GET_USER_INFO } from 'gql/query';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movies, loginState, message } from 'store/atom';
import { messageState } from 'store/select';
import styled from 'styled-components';
import Navgation from '../common/Navgation';
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

  const { pathname } = useLocation();
  const isLoggedIn = useRecoilValue(loginState);
  const { isOpen } = useRecoilValue(messageState);

  const [movieData, setMovieData] = useRecoilState(movies);
  const [tempList, setTempList] = useState([]);
  const [msg, setMsg] = useRecoilState(message);

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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMsg('');
  };

  return (
    <StyledHeader>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleClose}
        >
          {msg}
        </MuiAlert>
      </Snackbar>
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
          <UserProfile />
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
