import React, { useEffect, useState } from 'react';
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
import { useLocation, withRouter } from 'react-router-dom';
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

function SetPassword(props) {
  const { formType, action } = props;
  const { pathname } = useLocation();
  const isComfiredEimal = formType === 'comfired';
  const classes = useStyles();
  const [errorState, setErrorState] = useState({});
  const [pwdData, setPwdData] = useState({});

  useEffect(() => {
    if (!isComfiredEimal) {
      const token = pathname.slice(17);
      setPwdData({ ...pwdData, token });
    }
  }, [pathname]);
  const vaildateState = (e) => {
    vaildateStateFun(e, setErrorState, errorState);
  };
  const getPwdData = (e) => {
    setPwdData({
      ...pwdData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await action({
        variables: {
          ...pwdData,
        },
      });
      if (!isComfiredEimal) {
        props.history.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyleContainer component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          {isComfiredEimal ? 'Forget Password' : 'Reset Password'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
                  onChange={getPwdData}
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
                    errorState={errorState}
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

export default withRouter(SetPassword);
