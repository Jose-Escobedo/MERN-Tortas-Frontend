import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerContainerText>
          Due to ongoing improvements, online delivery orders are temporarily unavailable. You can still order for pickup on our website or get delivery through <StyledLink href="https://www.grubhub.com/restaurant/tortas-mexico-11040-ventura-blvd-studio-city/141026" target="_blank" rel="noopener noreferrer">Grubhub</StyledLink> and <StyledLink href="https://www.doordash.com/business/tortas-mexico-129293/" target="_blank" rel="noopener noreferrer">DoorDash</StyledLink>.
        </BannerContainerText>
      </BannerContainer>
    </>
  );
}

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #d9edf7;
  border: 1px solid #bcdff1;
  height: auto;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const BannerContainerText = styled.h2`
  font-weight: 300;
  margin: 0;
  font-family: Urbanist, sans-serif;
  font-size: .8rem;
  color: #31708f;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  color: #31708f;

  &:hover {
    color: #245269;
  }
`;

export default Banner;
