import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';

const TitleList = styled.div`
  padding: 20px 40px;
  box-sizing: border-box;
  transition: opacity 3s ease;
  opacity: 1;
  position: relative;
  z-index: 4;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  width: calc(100vw - 80px);
  box-sizing: border-box;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1em;
`;

export default function Card({ title, movieDatas }) {
  const titles = movieDatas.map((info) => {
    return <Item key={info.movie_id} info={info} />;
  });

  return (
    <TitleList>
      <Title>
        <h1>{title}</h1>
        <TitleWrapper>{titles}</TitleWrapper>
      </Title>
    </TitleList>
  );
}
