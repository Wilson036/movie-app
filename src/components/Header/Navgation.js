import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from 'store/atom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    display: flex;
    height: 37px;
    align-items: center;
    padding: 0 10px;
    li {
      font-weight: 400;
      padding: 8px 10px;
      transition: background 0.125s ease;
      border-radius: 4px;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }
    }
  }
`;

function Navgation() {
  const isLoggedIn = useRecoilValue(loginState);
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Browse</Link>
        </li>
        {isLoggedIn && <li>My List</li>}
      </ul>
    </StyledNav>
  );
}

export default Navgation;
