import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid rgba(245, 245, 241, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  transition: border 0.125s ease, background 0.125s ease;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    border: 2px solid #fff;
  }
`;

export default function BannerButton({ text, clicKEvent = () => {} }) {
  return <Button onClick={clicKEvent}>{text}</Button>;
}
