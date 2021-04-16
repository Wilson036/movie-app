import styled, { css } from 'styled-components';

const ListToggle = styled.div`
  border: 2px solid #e50914;
  background: #e50914;
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 32px;
  overflow: hidden;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0;

  &:hover {
    border: 2px solid #ffffff;
    div {
      top: -32px;
    }
  }
  div {
    position: absolute;
    top: ${({ toggled }) => (toggled ? '-32' : '0')};
    left: 0;
    height: 64px;
    width: 32px;
    -webkit-transition: 0.125s ease;
    transition: 0.125s ease;
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 32px;
    }
  }
`;

export default ListToggle;
