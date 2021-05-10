import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { setDateFormat } from '../../util';

const StyledDiv = styled.div`
  height: 510px;
`;

const List = styled.ul`
  height: 510px;
  overflow-y: scroll;
  li {
    padding-bottom: 28px;
    border-bottom: 2px solid red;
    p {
      font-size: 16px;
      color: #434eae;
      font-weight: 700;
      margin: 8px auto;
    }
  }
`;

const Type = styled.div`
  border-radius: 4px;
  background-color: #c840aa;
  font-weight: 500;
  width: 40px;
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  pointer-events: auto;
  color: #26282a;
  border: 1px solid #26282a;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 8px;
  font-size: 16px;
  border-radius: 4px;
  &:disabled {
    border: 1px solid #b9b9b9;
    color: #b9b9b9;
    pointer-events: none;
    background: #fff;
  }
`;

export default function TimeList({ timeList, queryDate, loading }) {
  const disabledState = (showTime) => {
    const time = `${setDateFormat(queryDate)} ${showTime}`;
    const dateTime = new Date(time);
    return new Date() > dateTime;
  };

  if (loading)
    return (
      <StyledDiv>
        {' '}
        <CircularProgress />
      </StyledDiv>
    );

  if (!Object.values(timeList).length) return <StyledDiv>無上映資料</StyledDiv>;
  return (
    <List>
      {Object.keys(timeList).map((key) => {
        return (
          <li key={key}>
            <p>{key}:</p>
            <div key={`${key}-div`}>
              {Object.keys(timeList[key]).map((type) => {
                return (
                  <>
                    <Type key={`${key}-${type}`}>{type}</Type>
                    <div key={`${key}-${type}-time`}>
                      {timeList[key][type].map(({ show_time }) => {
                        return (
                          <StyledButton
                            key={`${key}-${type}-${show_time}`}
                            disabled={disabledState(show_time)}
                          >
                            {show_time}
                          </StyledButton>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </li>
        );
      })}
    </List>
  );
}
