import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  pointer-events: none;
  input {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 14px;
    height: 36px;
    width: 20%;
    appearance: none;
    border: 0;
    border: 2px solid rgba(245, 245, 245, 0.1);
    background: transparent;
    outline: none;
    border-radius: 36px;
    padding: 0 10px;
    pointer-events: all;
    transition: border 0.25s ease, width 0.125s ease 0.125s;
    &:focus {
      border: 2px solid #e50914;
      width: 30%;
    }
  }
`;

function Search() {
  return (
    <SearchDiv>
      <input type="search" name="" id="" placeholder="search movie title" />
    </SearchDiv>
  );
}

export default Search;
