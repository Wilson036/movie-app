import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState, userData } from 'store/atom';
import { useSetMoviesList } from 'store/hook';
import styled, { css } from 'styled-components';

const Content = styled.div`
  position: relative;
  z-index: 4;
  width: 500px;
  left: 60px;
  top: 40vh;
  margin-right: 72px;
  p {
    width: 100%;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
const Title = styled.p`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
  margin-top: 30px;
  justify-content: space-between;
`;

const Button = styled.button`
  ${(props) =>
    props.toggled &&
    css`
      border: 2px solid red !important;
      color: red !important;
    `}
  background: transparent;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid rgba(245, 245, 241, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  transition: border 0.125s ease, background 0.125s ease;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    border: 2px solid #fff;
  }
`;

export default function BannerContent({ info }) {
  const { title, movie_id } = info;
  const { favorite_movies } = useRecoilValue(userData);
  const setMovieList = useSetMoviesList();
  const isOnList = favorite_movies.includes(movie_id);
  const [isToggle, setIsToggle] = useState(isOnList);
  const isTouch = useRef(false);
  const isLoggedIn = useRecoilValue(loginState);

  useEffect(() => {
    if (isTouch.current) {
      setMovieList(isToggle, movie_id);
    } else {
      isTouch.current = true;
    }
  }, [isToggle]);

  return (
    <>
      <Content>
        <Title>{info.title}</Title>
        <h2>Now available</h2>
        <ButtonWrapper>
          <Button>
            <Link to={{ pathname: `/movie-info/${title}`, state: { ...info } }}>
              時刻表
            </Link>
          </Button>
          {isLoggedIn && (
            <Button toggled={isToggle} onClick={() => setIsToggle(!isToggle)}>
              {isToggle ? ' On' : '+ My'} List
            </Button>
          )}
        </ButtonWrapper>
      </Content>
      <img src={info.img_src} alt={info.title} />
    </>
  );
}
