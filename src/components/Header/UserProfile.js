import { useMutation } from '@apollo/client';
import { Button } from '@material-ui/core';
import { LOGOUT } from 'gql/mutation';
import React from 'react';
import { useChangeLoggedState } from 'store/hook';
import styled from 'styled-components';

const User = styled.div`
  cursor: pointer;
  display: flex;
`;

const Image = styled.div`
  border-radius: 40px;
  margin-left: 12px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  transition: broder 0.125s ease;
  &:hover {
    border: 3px solid #e50914;
  }
  img {
    width: 100%;
    display: block;
  }
`;
const Name = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 300;
  height: 40px;
  font-size: 24px;
`;
export default function UserProfile({ name, url }) {
  const changeState = useChangeLoggedState();
  const [logout] = useMutation(LOGOUT);
  const logoutFun = async () => {
    try {
      const { data } = await logout();
      if (data.logout) {
        localStorage.removeItem('token');
        changeState();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <User>
      <Button onClick={logoutFun} color="secondary">
        登出
      </Button>
      <Name>{name}</Name>
      <Image>
        <img src={url} alt="profile" />
      </Image>
    </User>
  );
}
