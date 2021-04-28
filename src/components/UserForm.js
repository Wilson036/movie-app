import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: 'white',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  multilineColor: {
    color: 'white',
  },
}));

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
const StyledCheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0 8px;
`;

const StyledButton = styled(Button)`
  &:disabled {
    background-color: #e0e0e0 !important;
  }
`;

export default function UserForm({ formStyle }) {
  const userObj = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    comfiredPassword: '',
  };

  const [userData, setUserData] = useState(userObj);
  const [errorState, setErrorState] = useState({
    ...userObj,
    readTerms: true,
  });
  const [disableState, setDisableState] = useState(true);
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    comfiredPassword: false,
  });
  useEffect(() => {
    if (touched) {
      const vaildate = Object.values(errorState)
        .map(Boolean)
        .some((value) => value);
      setDisableState(vaildate);
    }
  }, [errorState]);

  const classes = useStyles();

  const handleClickShowPassword = (name) => {
    setShowPassword({
      ...showPassword,
      [name]: !showPassword[name],
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const vaildateState = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let errorMsg = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          errorMsg = '請輸入姓名';
        }
        break;
      case 'password':
        if (value.trim().length < 8) {
          errorMsg = '密碼長度需大於8';
        }
        break;
      case 'email':
        if (
          !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
            value
          )
        ) {
          errorMsg = 'email格式不對';
        }
        break;
      case 'comfiredPassword':
        // @ts-ignore
        const pwd = document.querySelector('#password').value;
        // @ts-ignore
        const comfiredPwd = document.querySelector('#comfiredPassword').value;
        if (pwd !== comfiredPwd) {
          errorMsg = '密碼不吻合';
        }
        break;
      case 'readTerms':
        setErrorState({
          ...errorState,
          readTerms: !errorState.readTerms,
        });
        setTouched(true);
        return;
    }
    setErrorState({ ...errorState, [name]: errorMsg });
  };

  return (
    <StyleContainer component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          {formStyle === 'singUp' ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Grid container spacing={2}>
            {formStyle === 'singUp' && (
              <>
                {' '}
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    autoComplete="fname"
                    color="secondary"
                    name="firstName"
                    variant="filled"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error={!!errorState.firstName}
                    helperText={errorState.firstName}
                    onChange={(e) => {
                      getUserData(e);
                      vaildateState(e);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    variant="filled"
                    color="secondary"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    error={!!errorState.lastName}
                    helperText={errorState.lastName}
                    onChange={(e) => {
                      getUserData(e);
                      vaildateState(e);
                    }}
                  />
                </Grid>
              </>
            )}

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
                error={!!errorState.email}
                helperText={errorState.email}
                onChange={(e) => {
                  getUserData(e);
                  vaildateState(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="filled"
                color="secondary"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword.password ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                error={!!errorState.password}
                helperText={errorState.password}
                onChange={(e) => {
                  getUserData(e);
                  vaildateState(e);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          handleClickShowPassword('password');
                        }}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword.password ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {formStyle === 'singUp' && (
              <>
                <Grid item xs={12}>
                  <StyledTextField
                    variant="filled"
                    color="secondary"
                    required
                    fullWidth
                    name="comfiredPassword"
                    label="Comfired Password"
                    type={showPassword.comfiredPassword ? 'text' : 'password'}
                    id="comfiredPassword"
                    autoComplete="current-password"
                    error={!!errorState.comfiredPassword}
                    helperText={errorState.comfiredPassword}
                    onChange={(e) => {
                      getUserData(e);
                      vaildateState(e);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {
                              handleClickShowPassword('comfiredPassword');
                            }}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword.comfiredPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckBox
                        type="checkbox"
                        name="readTerms"
                        onChange={(e) => {
                          vaildateState(e);
                        }}
                      />
                    }
                    label="我已經詳細閱讀條款"
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
            disabled={disableState}
          >
            {formStyle === 'singUp' ? '註冊' : '登入'}
          </StyledButton>
          {formStyle === 'singUp' && (
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/singIn">已經有帳號了嗎？ 登入</Link>
              </Grid>
            </Grid>
          )}
        </form>
      </div>
    </StyleContainer>
  );
}
