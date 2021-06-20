import React from "react";
import styled from "styled-components";
import Item from "./CardItem";

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
  justify-content: center;
  margin: 20px 0;
  width: calc(100vw - 80px);
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1em;
`;

export default function Card({ title, movieDatas }) {
  const titles = movieDatas.map((info) => (
    <Item key={info.movie_id} info={info} />
  ));

  return (
    <TitleList>
      <Title>
        <h1>{title}</h1>
        <TitleWrapper>{titles}</TitleWrapper>
      </Title>
    </TitleList>
  );
}
