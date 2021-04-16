import React from 'react';
import styled from 'styled-components';
import Header from '././Header';

const MainDiv = styled.main`
  padding: 1em;
  overflow-y: scroll;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
}

export default Layout;
