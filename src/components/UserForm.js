import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { useFormState } from 'react-use-form-state';

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

export default function UserForm() {
  const [userData, setUserData] = useState({});
  const [errorState, setErrorState] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    comfiredPassword: '',
    readTerms: false,
  });
  const [disableState, setDisableState] = useState(true);
  useEffect(() => {
    const vaildate = Object.values(errorState).some((value) => value);
    setDisableState(vaildate);
    console.log(errorState);
    console.log('vaildate', vaildate);
  }, [errorState]);

  const classes = useStyles();

  const getUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const vaildateState = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
        if (userData['password'] !== value) {
          errorMsg = '密碼不吻合';
        }
        break;
      case 'readTerms':
        setErrorState({ ...errorState, [name]: !e.target.checked });
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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Grid container spacing={2}>
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
                onChange={getUserData}
                onBlur={vaildateState}
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
                onChange={getUserData}
                onBlur={vaildateState}
              />
            </Grid>
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
                onBlur={vaildateState}
                onChange={getUserData}
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
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errorState.password}
                helperText={errorState.password}
                onBlur={vaildateState}
                onChange={getUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="filled"
                color="secondary"
                required
                fullWidth
                name="comfiredPassword"
                label="Comfired Password"
                type="password"
                id="comfired-password"
                autoComplete="current-password"
                error={!!errorState.comfiredPassword}
                helperText={errorState.comfiredPassword}
                onKeyDown={vaildateState}
                onChange={getUserData}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <StyledCheckBox
                    type="checkbox"
                    name="readTerms"
                    onClick={vaildateState}
                  />
                }
                label="我已經詳細閱讀條款"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={disableState}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </StyleContainer>
  );
}
