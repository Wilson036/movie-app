import { useQuery } from '@apollo/client';
import { GET_MOVIE_LIST } from 'gql/query';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { setDateFormat } from '../util';
import { myList } from '../store';

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  padding-bottom: 36px;
  border-bottom: 1px solid red;
  margin-bottom: 36px;
  color: #000;
`;

const PostDiv = styled.div`
  padding: 20px;
  border-right: 1px solid #d2d2d2;
  justify-content: center;
`;

const InfoDiv = styled.div`
  padding: 20px;
`;

const MovieInfoCard = styled.div`
  background: #ececec;
  border: 1px solid #d2d2d2;
  display: flex;
  width: 800px;
`;

export default function MyList() {
  const movies = useRecoilValue(myList);
  const { data, loading, error } = useQuery(GET_MOVIE_LIST, {
    variables: {
      ids: movies,
    },
  });
  const [movieInfos, setmovieInfos] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setmovieInfos(data.queryMoviesByIds);
    }
  }, [data]);

  return (
    <ul>
      {movieInfos.map(({ title, anticipation, img_src, release_date }) => (
        <StyledLi key={title}>
          <MovieInfoCard>
            <PostDiv>
              <img
                src="https://movies.yahoo.com.tw/i/o/production/movies/March2021/vsfkM9g2D2WvlOqvcuS2-672x953.jpg"
                width="294px"
                alt=""
              />
            </PostDiv>
            <InfoDiv>
              <h1>{title}</h1>
              <p>{setDateFormat(new Date(release_date))}</p>
            </InfoDiv>
          </MovieInfoCard>
        </StyledLi>
      ))}
    </ul>
  );
}
