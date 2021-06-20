import React from "react";
import styled from "styled-components";
import BannerContent from "./BannerContent";

const StyledBanner = styled.div`
  background-image: ${(props) => `url(${props.url})`};
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 952px;
`;

const InnerContainer = styled.div`
  height: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.85) 15%,
    rgba(0, 0, 0, 0.2) 40%,
    #000 90%
  );
  display: flex;
`;

export default function Banner({ info }) {
  return (
    <StyledBanner url={info.img_src}>
      <InnerContainer>
        <BannerContent info={info} />
      </InnerContainer>
    </StyledBanner>
  );
}
