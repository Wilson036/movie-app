import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  width: 400px;
  margin-top: 30px;
  button:first-child {
    margin-right: 8px;
  }
`;

const Button = styled.button`
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

  const addList = () => {
    console.log(`${movie_id} added to my list`);
  };

  return (
    <>
      <Content>
        <Title>{info.title}</Title>
        <h2>Now available</h2>

        {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id
        quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
      </p> */}
        <ButtonWrapper>
          <Button>
            <Link to={{ pathname: `/movie-info/${title}`, state: { ...info } }}>
              時刻表
            </Link>
          </Button>
          <Button onClick={addList}>+ My List</Button>
        </ButtonWrapper>
      </Content>
      <img src={info.img_src} alt={info.title} />
    </>
  );
}
