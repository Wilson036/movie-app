import { useQuery } from "@apollo/client";
import { GET_MOVIE_LIST } from "gql/query";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userData } from "../store";

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
  a {
    line-height: 1.3;
    color: #434eae;
    text-decoration: underline;
  }
`;

const MovieInfoCard = styled.div`
  background: #ececec;
  border: 1px solid #d2d2d2;
  display: flex;
  width: 800px;
`;

const TextP = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export default function MyList() {
  const { favorite_movies } = useRecoilValue(userData);
  const { data, loading, error } = useQuery(GET_MOVIE_LIST, {
    variables: {
      ids: favorite_movies,
    },
  });
  const [movieInfos, setmovieInfos] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setmovieInfos(data.queryMoviesByIds);
    }
  }, [data]);

  if (!favorite_movies.length) return <div>尚無喜愛電影資料</div>;

  return (
    <ul>
      {movieInfos.map(
        ({
          title,
          anticipation,
          img_src,
          release_time,
          release_text,
          info_src,
        }) => (
          <StyledLi key={title}>
            <MovieInfoCard>
              <PostDiv>
                <img src={img_src} width="294px" alt="" />
              </PostDiv>
              <InfoDiv>
                <h1>{title}</h1>
                <p>{release_time}</p>
                <p>{anticipation}</p>
                <TextP>{release_text}</TextP>
                <a href={info_src}>詳全文</a>
              </InfoDiv>
            </MovieInfoCard>
          </StyledLi>
        )
      )}
    </ul>
  );
}
