import { Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
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
`;

const StyleP = styled.p`
  margin: 0;
  font-size: 20px;
`;
export default function DateSelect({ setQueryDate }) {
  return (
    <StyledDiv>
      {[0, 1, 2, 3, 4].map((num) => {
        const date = new Date();
        date.setDate(date.getDate() + num);
        return (
          <>
            <Paper elevation={2} key={`${num}-Paper`}>
              <StyledButton
                key={`${num}-Button`}
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
            </Paper>
          </>
        );
      })}
    </StyledDiv>
  );
}
