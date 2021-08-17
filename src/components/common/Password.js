import React, { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  background: #8c8c8c;
  label {
    color: white;
  }
`;

export default function Password({
  text,
  validateFun,
  onChangeFun,
  errorState,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <StyledTextField
      variant="filled"
      color="secondary"
      required
      fullWidth
      name={text}
      label={label}
      type={showPassword ? "text" : "password"}
      id={text}
      autoComplete={`"current-${text}"`}
      error={!!errorState[text]}
      helperText={errorState[text]}
      onChange={(e) => {
        onChangeFun(e);
        validateFun(e);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                handleClickShowPassword();
              }}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
