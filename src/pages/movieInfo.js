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
  height: 740px;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  width: 50%;
  padding: 25px;
  color: #fafafa;
`;

export default function movieInfo({ location }) {
  const { name, vote_average, backDrop, popularity } = location.state;

  return (
    <Container>
      <CardCont>
        <Post backDrop={backDrop} />
        <Description>
          <h1>{name}</h1>
        </Description>
      </CardCont>
    </Container>
  );
}
