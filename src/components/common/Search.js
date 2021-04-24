import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.input`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 14px;
  height: 36px;
  width: ${(props) => `${props.width}%`};
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
    width: ${(props) => `${Number(props.width) * 1.5}%`};
  }
`;

function Search({ text, width, searchEvent }) {
  return (
    <StyledSearch
      type="search"
      placeholder={text}
      width={width}
      onBlur={searchEvent}
    />
  );
}

export default Search;
