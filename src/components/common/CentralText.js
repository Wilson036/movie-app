import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid white;
  }
  &:not(:empty)::before {
    margin-right: 0.25em;
  }
  &:not(:empty)::after {
    margin-left: 0.25em;
  }
`;
export default function CentralText({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
