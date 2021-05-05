import { useMutation } from '@apollo/client';
import SetPassword from 'components/common/SetPassword';
import { CHANGE_PASSWORD } from 'gql/mutation';
import React from 'react';

export default function ResetPassword() {
  const [changePassword, { error, loading }] = useMutation(CHANGE_PASSWORD);
  if (loading) return <div>NOW LOADING</div>;
  if (error) return <div>{error}</div>;
  return <SetPassword formType="reset" action={changePassword} />;
}
