import React from 'react';
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
  return (
    <StyledNav>
      <ul>
        <li>Browse</li>
        <li>My List</li>
      </ul>
    </StyledNav>
  );
}

export default Navgation;
