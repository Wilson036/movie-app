import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px;
`;

const CardCont = styled.div`
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.85);
  padding: 0;
  width: 100%;
  display: flex;
`;

const Post = styled.div`
  width: 50%;
  background-image: url(${(props) => `${props.backDrop}`});
  background-position: center;
  background-size: cover;
  height: 1120px;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  width: 50%;
  padding: 25px;
  color: #fafafa;
`;

export default function movieInfo({ location }) {
  const {
    movie_id,
    title,
    anticipation,
    img_src,
    release_date,
  } = location.state;

  return (
    <Container>
      <CardCont>
        <Post backDrop="https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg" />
        <Description>
          <h1>{title}</h1>
        </Description>
      </CardCont>
    </Container>
  );
}
