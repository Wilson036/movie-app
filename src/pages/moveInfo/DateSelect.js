import { Button, Paper } from '@material-ui/core';
import styled, { css } from 'styled-components';
import React from 'react';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    width: 20%;
    height: 80px;
    margin-top: 8px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;

  ${({ selected }) =>
    selected &&
    css`
      color: #fff !important;
    `}
`;

const StyleP = styled.p`
  margin: 0;
  font-size: 20px;
`;

const StyledPaper = styled(Paper)`
  ${({ selected }) =>
    selected &&
    css`
      background-color: #0c5eab !important;
    `}
`;
export default function DateSelect({ setQueryDate, queryDate }) {
  return (
    <StyledDiv>
      {[0, 1, 2, 3, 4].map((num, i) => {
        const date = new Date();
        date.setDate(date.getDate() + num);
        const selected = isDateEqualTo(date, queryDate);
        return (
          <>
            <StyledPaper elevation={2} key={`${num}-Paper`} selected={selected}>
              <StyledButton
                key={`${num}-Button`}
                selected={selected}
                onClick={() => {
                  setQueryDate(date);
                }}
              >
                {' '}
                <StyleP key={`${num}-p`}>
                  {date.getMonth() + 1} 月 <br />
                  {date.getDate()}日
                </StyleP>
              </StyledButton>
            </StyledPaper>
          </>
        );
      })}
    </StyledDiv>
  );
}

const isDateEqualTo = (date, selectDate) => {
  return (
    date.getDate() === selectDate.getDate() &&
    date.getMonth() === selectDate.getMonth()
  );
};
