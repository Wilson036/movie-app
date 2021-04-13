import React from 'react';
import styled from 'styled-components';
import Navgation from './Navgation';
import Search from './Search';

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
  return (
    <StyledHeader>
      <Navgation />
      <Search />
    </StyledHeader>
  );
}

export default Header;
