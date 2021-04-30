import { useMutation } from '@apollo/client';
import UserForm from 'components/UserForm';
import { SIGN_IN } from 'gql/mutation';
import React from 'react';

export default function SingIn() {
  const [login, { loading }] = useMutation(SIGN_IN);
  if (loading) return <div>isLoading ....</div>;
  return <UserForm formStyle="singIn" action={login} />;
}
