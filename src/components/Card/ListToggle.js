import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
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

export const ListToggle = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <ListToggleDiv
      toggled={toggled}
      onClick={() => {
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
