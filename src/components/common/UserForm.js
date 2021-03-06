import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useMutation } from "@apollo/client";
import { LOGIN_BY_OAUTH } from "gql/mutation";
import { useChangeLoggedState } from "store/hook";
import { validateStateFun } from "../../util";

import useStyles from "style";
import CentralText from "./CentralText";
import Password from "./Password";
import { CircularProgress } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { message } from "store";

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

const GOOGLE_LOGIN_BTN = styled(GoogleLogin)`
  width: 100%;
  justify-content: center;
  div {
    display: flex;
  }
`;

const UserForm = (props) => {
  const { formStyle, action } = props;
  const isSignUp = formStyle === "singUp";
  const userObj = {
    password: "",
    email: "",
  };
  if (isSignUp) {
    userObj.username = "";
    userObj.confirmedPassword = "";
  }
  const classes = useStyles();
  const changeState = useChangeLoggedState();
  const [_, setMsg] = useRecoilState(message);
  const [LoginWithOauth] = useMutation(LOGIN_BY_OAUTH);
  const [userData, setUserData] = useState(userObj);
  const [errorState, setErrorState] = useState({
    ...userObj,
    readTerms: isSignUp,
  });

  const [isLoading, setIsLoading] = useState(false);

  const disableState =
    Object.values(errorState)
      .map(Boolean)
      .some((value) => value) ||
    !Object.values(userData)
      .map(Boolean)
      .every((value) => value);

  const getUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const validateState = (e) => {
    validateStateFun(e, setErrorState, errorState);
  };

  const loginWithOauth = async (email, id) => {
    setToken({ email, id }, LoginWithOauth, "LoginWithOauth");
  };

  const responseGoogle = ({ profileObj }) => {
    const { email, googleId } = profileObj;
    loginWithOauth(email, googleId);
  };

  const responseFacebook = async ({ email, id }) => {
    loginWithOauth(email, id);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setToken(userData, action, isSignUp ? "registerUser" : "login");
  };

  const setToken = async (variables, action, key) => {
    try {
      setIsLoading(true);
      const { data } = await action({
        variables: {
          ...variables,
        },
      });
      props.history.push("/");
      localStorage.setItem("token", data[key]);
      changeState();
      setMsg(isSignUp ? "????????????" : "????????????");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading)
    return (
      <div>
        {" "}
        <CircularProgress />
      </div>
    );
  return (
    <StyleContainer component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          {formStyle === "singUp" ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container spacing={2}>
            {formStyle === "singUp" && (
              <>
                {" "}
                <Grid item xs={12}>
                  <StyledTextField
                    autoComplete="name"
                    color="secondary"
                    name="username"
                    variant="filled"
                    required
                    fullWidth
                    id="username"
                    label="Name"
                    error={!!errorState.username}
                    helperText={errorState.username}
                    onChange={(e) => {
                      getUserData(e);
                      validateState(e);
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
                  validateState(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Password
                text="password"
                errorState={errorState}
                validateFun={validateState}
                onChangeFun={getUserData}
              />
              {formStyle !== "singUp" && (
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/forgetPassword">????????????</Link>
                  </Grid>
                </Grid>
              )}
            </Grid>
            {formStyle === "singUp" && (
              <>
                <Grid item xs={12}>
                  <Password
                    text="confirmedPassword"
                    validateFun={validateState}
                    onChangeFun={getUserData}
                    errorState={errorState}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <StyledCheckBox
                        type="checkbox"
                        name="readTerms"
                        id="readTerms"
                        onChange={validateState}
                      />
                    }
                    label="???????????????????????????"
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
            {isSignUp ? "??????" : "??????"}
          </StyledButton>
          {isSignUp && (
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/singIn">???????????????????????? ??????</Link>
              </Grid>
            </Grid>
          )}
          <CentralText>???</CentralText>
          <br />
          <GOOGLE_LOGIN_BTN
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <br />
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-fb-class"
            icon="fa-facebook"
          />
        </form>
      </div>
    </StyleContainer>
  );
};

export default withRouter(UserForm);
