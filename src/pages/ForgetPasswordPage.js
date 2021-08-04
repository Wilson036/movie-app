import { useMutation } from "@apollo/client";
import SetPassword from "components/common/SetPassword";
import { SEND_EMAIL } from "gql/mutation";
import React from "react";

export default function ForgetPassword() {
  const [sendComfiredEmail] = useMutation(SEND_EMAIL);
  return <SetPassword formType="comfired" action={sendComfiredEmail} />;
}
