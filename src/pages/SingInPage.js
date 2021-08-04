import { useMutation } from '@apollo/client';
import UserForm from 'components/common/UserForm';
import { SIGN_IN } from 'gql/mutation';
import React from 'react';

export default function SingIn() {
  const [login] = useMutation(SIGN_IN);
  return <UserForm formStyle="singIn" action={login} />;
}
