import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "store/atom";
import styled from "styled-components";
import { ListToggle } from "./CardListToggle";

const StyledItem = styled.div`
  width: 230px;
  background-color: #000;
  background-image: url(${(props) => `${props.backdrop}`});
  background-position: center;
  background-size: 100%;
  height: 328px;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-right: 10px;
  transition: background 1s ease;
  margin-bottom: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-size: 150%;
    div {
      opacity: 1;
      div:nth-child(3) {
        margin-top: 10px;
      }
    }
    div :first-child {
      pointer-events: all;
    }
  }
`;

const OverLay = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 0%,
    transparent 100%
  );
  padding: 20px;
  position: relative;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.125s ease;
`;
const ItemTitle = styled.div`
  font-size: 22px;
  font-weight: 200;
  opacity: 0;
  transition: opacity 0.25s ease;
  &:hover {
    margin-top: 10px;
    opacity: 1;
  }
`;

const Rank = styled.div`
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.25s ease 0.125s;
`;

const Plot = styled.div`
  font-size: 14px;
  margin-top: 100px;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: margin 0.25s ease 0.125s, opacity 0.25s ease 0.25s;
`;

export default function Item({ info }) {
  const { title, anticipation, img_src, release_text, movie_id } = info;
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <StyledItem backdrop={img_src}>
      <Link to={{ pathname: `/movie-info/${title}`, state: { ...info } }}>
        <OverLay>
          <ItemTitle>{title}</ItemTitle>
          <Rank>{anticipation}</Rank>
          <Plot> {release_text}</Plot>
          {isLoggedIn && <ListToggle movie_id={movie_id} />}
        </OverLay>
      </Link>
    </StyledItem>
  );
}
