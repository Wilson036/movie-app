import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navgation from './Navgation';
import Search from './Search';
import UserProfile from './UserProfile';

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

function Header() {
  const { pathname } = useLocation();

  const url =
    'https://www.gravatar.com/avatar/a10d2dadfe08fb12f57abc0c82f74554.jpg?d=identicon';
  return (
    <StyledHeader>
      <Navgation />
      {pathname === '/' && <Search />}
      <UserProfile name="wilson" url={url} />
    </StyledHeader>
  );
}

export default withRouter(Header);
