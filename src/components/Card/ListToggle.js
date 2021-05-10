import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userData } from '../../store';
import { useSetMoviesList } from 'store/hook';
import styled from 'styled-components';

const ListToggleDiv = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: ${({ toggled }) => (toggled ? '#e50914' : 'none')};
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 32px;
  overflow: hidden;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0;

  &:hover {
    border: 2px solid #ffffff;
    div {
      top: -32px;
    }
  }
  div {
    position: absolute;
    top: ${({ toggled }) => (toggled ? '-32px' : '0')};
    left: 4px;
    height: 64px;
    width: 32px;
    -webkit-transition: 0.125s ease;
    transition: 0.125s ease;
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 32px;
    }
  }
`;

export const ListToggle = ({ movie_id }) => {
  const { favorite_movies } = useRecoilValue(userData);
  const [toggled, setToggled] = useState(false);
  const setMovieList = useSetMoviesList();
  const isMounted = useRef(false);

  useEffect(() => {
    setToggled(favorite_movies.includes(movie_id));
  }, [favorite_movies, movie_id]);

  useEffect(() => {
    if (isMounted.current) {
      setMovieList(toggled, movie_id);
    } else {
      isMounted.current = true;
    }

    return () => {
      isMounted.current = false;
    };
  }, [toggled, movie_id]);

  return (
    <ListToggleDiv
      toggled={toggled}
      onClick={(e) => {
        e.preventDefault();
        setToggled(!toggled);
      }}
    >
      <div>
        <FontAwesomeIcon icon={['fas', 'plus']} size="lg" />
        <FontAwesomeIcon icon={['fas', 'check']} size="lg" />
      </div>
    </ListToggleDiv>
  );
};
