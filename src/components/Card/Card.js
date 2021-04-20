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

const apiKey = '87dfa1c669eea853da609d4968d294be';
export default function Card({ title, url }) {
  const [data, setData] = useState({ results: [] });
  const loadContent = () => {
    const requestUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`;
    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData((prevData) => ({
          ...prevData,
          ...data,
        }));
      })
      .catch((err) => {
        console.log('There has been an error');
      });
  };

  useEffect(() => {
    loadContent();
  }, [url]);

  const titles = data.results.map((info, i) => {
    if (i < 5) {
      const title = !info.name ? info.original_title : info.name;
      const backDrop = `http://image.tmdb.org/t/p/original${info.backdrop_path}`;
      info = { ...info, backDrop, title };
      console.log(info);

      return <Item key={info.id} info={info} />;
    }
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
