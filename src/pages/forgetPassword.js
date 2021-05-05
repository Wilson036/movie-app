import { useMutation } from '@apollo/client';
import SetPassword from 'components/common/SetPassword';
import { SEND_EMAIL } from 'gql/mutation';
import React from 'react';

export default function ForgetPassword() {
  const [sendComfiredEmail, { error, loading }] = useMutation(SEND_EMAIL);
  // if (loading) return <div>NOW LOADING</div>;
  // if (error) return <div>{error}</div>;
  return <SetPassword formType="comfired" action={sendComfiredEmail} />;
}
