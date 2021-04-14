import React from 'react';
import styled from 'styled-components';
import BannerButton from './BannerButton';

const Content = styled.div`
  position: relative;
  z-index: 4;
  width: 500px;
  left: 60px;
  top: 40vh;
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

export default function BannerContent() {
  return (
    <Content>
      <Title>The Falcon and the Winter Soldier</Title>
      <h2>Now available</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id
        quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
      </p>
      <ButtonWrapper>
        <BannerButton text="Watch Now" />
        <BannerButton text="+ My List" />
      </ButtonWrapper>
    </Content>
  );
}
