import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import useStyles from 'style';
import { vaildateStateFun } from '../util';
import Password from './common/Password';
const StyleContainer = styled(Container)`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding-top: 2px;
`;

const StyledTextField = styled(TextField)`
  background: #8c8c8c;
  label {
    color: white;
  }
`;

const StyledButton = styled(Button)`
  &:disabled {
    background-color: #e0e0e0 !important;
  }
`;

export default function SetPassword({ formType, action }) {
  const isComfiredEimal = formType === 'comfired';
  const classes = useStyles();
  const [errorState, setErrorState] = useState({});
  const [pwdData, setPwdData] = useState({});
  const vaildateState = (e) => {
    vaildateStateFun(e, setErrorState, errorState);
  };
  const getPwdData = (e) => {
    setPwdData({
      ...pwdData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <StyleContainer component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          {isComfiredEimal ? 'Forget Password' : 'Reset Password'}
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {isComfiredEimal && (
              <Grid item xs={12}>
                <StyledTextField
                  variant="filled"
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            )}
            {!isComfiredEimal && (
              <>
                <Grid item xs={12}>
                  <Password
                    text="password"
                    errorState={errorState}
                    vaildateFun={vaildateState}
                    onChangeFun={getPwdData}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Password
                    text="comfiredPassword"
                    vaildateFun={vaildateState}
                    onChangeFun={getPwdData}
                    errorState={getPwdData}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            {isComfiredEimal ? '寄送驗證信' : '重設密碼'}
          </StyledButton>
        </form>
      </div>
    </StyleContainer>
  );
}
