import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerContainerText>
          Due to ongoing improvements to our delivery system, we are temporarily unable to accept online delivery orders. We apologize for any inconvenience and appreciate your understanding as we work to enhance our service. We look forward to resuming deliveries soon.
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
  margin-top: 70px;

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
    font-size: 1.2rem;
  }
`;

export default Banner;
