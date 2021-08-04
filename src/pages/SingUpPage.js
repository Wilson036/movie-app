import { useMutation } from "@apollo/client";
import UserForm from "components/common/UserForm";
import { SIGNUP_USER } from "gql/mutation";
import React from "react";

export default function SingUp() {
  const [registerUser] = useMutation(SIGNUP_USER);
  return <UserForm formStyle="singUp" action={registerUser} />;
}
