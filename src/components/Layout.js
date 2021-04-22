import { useQuery } from '@apollo/client';
import { GET_AREA_INFO, GET_THEATER_INFO } from 'gql/query';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Header from '././Header';
import { areasInfo, theaterInfo } from '../store';

const MainDiv = styled.main`
  padding: 1em;
  overflow-y: scroll;
  width: 100%;
`;

const FetchData = () => {
  const [area, setArea] = useRecoilState(areasInfo);
  const [theater, setTheater] = useRecoilState(theaterInfo);
  const areaInfo = useQuery(GET_AREA_INFO);
  const treaters = useQuery(GET_THEATER_INFO);
  if (!areaInfo.loading && !areaInfo.error) {
    setArea(areaInfo.data.queryAllArea);
  }
  if (!treaters.loading && !treaters.error) {
    setTheater(treaters.data.getAllTheaters);
  }
};

function Layout({ children }) {
  FetchData();
  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
}

export default Layout;
