import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContainerText>
        Thank you for over 20 years of support!<br />
        We have officially shut down operations. Online orders and checkout are no longer available.
        <br />
        <StyledLink href="mailto:support@pulsecraftweb.com">Contact us with questions</StyledLink>
        <br />
        <DesignedByLink href="https://pulsecraftweb.com" target="_blank" rel="noopener noreferrer">
          Website designed by PulseCraft Web
        </DesignedByLink>
      </BannerContainerText>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #d9edf7;
  border: 1px solid #bcdff1;
  margin-top: 93px;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const BannerContainerText = styled.h2`
  font-weight: 400;
  font-family: Urbanist, sans-serif;
  font-size: 1rem;
  color: #31708f;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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

const DesignedByLink = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 0.9rem;
  font-style: italic;
  color: #31708f;
  text-decoration: none;

  &:hover {
    color: #245269;
    text-decoration: underline;
  }
`;

export default Banner;
