import { useQuery } from '@apollo/client';
import { GET_AREA_INFO, GET_THEATER_INFO } from 'gql/query';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Header from '../Header';
import { areasInfo, theaterInfo } from '../../store';
import { useLocation } from 'react-router-dom';

const MainDiv = styled.main`
  padding: 1em;
  margin-top: 100px;
  overflow-y: scroll;
  width: 100%;
`;

function Layout({ children }) {
  const [area, setArea] = useRecoilState(areasInfo);
  const [theater, setTheater] = useRecoilState(theaterInfo);
  const areaInfo = useQuery(GET_AREA_INFO);
  const treaters = useQuery(GET_THEATER_INFO);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!areaInfo.loading && !areaInfo.error) {
      setArea(areaInfo.data.queryAllArea);
    }
    if (!treaters.loading && !treaters.error) {
      setTheater(treaters.data.getAllTheaters);
    }
  }, [areaInfo, treaters]);

  return (
    <>
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
}

export default Layout;
