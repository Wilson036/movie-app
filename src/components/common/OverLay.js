import styled from 'styled-components';

const OverLay = styled.div`
  background: linear-gradient(to bottom, #221f1f 0%, rgba(34, 31, 31, 0) 100%);
  height: 100%;
  position: relative;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(180deg);
`;

export default OverLay;
