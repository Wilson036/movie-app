import React from 'react';
import styled from 'styled-components';
import BannerContent from './BannerContent';

const StyledBanner = styled.div`
  background-image: url('https://www.indiewire.com/wp-content/uploads/2021/03/falcoln-winter-soldier.png');
  width: 100%;
  position: relative;
  background-size: cover;
  min-height: 800px;
`;
export default function Banner() {
  return (
    <StyledBanner>
      <BannerContent />
    </StyledBanner>
  );
}
