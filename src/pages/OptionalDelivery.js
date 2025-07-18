import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import deliverySvg from "../images/delivery.svg";
import pickupSvg from "../images/pickup.svg";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const OptionalDelivery = ({}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isGreaterThanTwenty = cart.subtotal > 10.86;

  return (
    <>
      <Navbar />
      <OptionalDeliveryContainer>
        <Wrapper>
          <h1>This Order is for...</h1>
          <TwoBoxContainer>
            {isGreaterThanTwenty ? (
              <DeliveryWrapper>
                <DeliveryLink to="/deliverycheckout">
                  <DeliveryButton>
                    <h3 className="click-btn delivery">Delivery</h3>
                  </DeliveryButton>
                </DeliveryLink>
                <img
                  src={deliverySvg}
                  alt="Illustration featuring a car getting to its delivery destination."
                ></img>
              </DeliveryWrapper>
            ) : (
              <DeliveryWrapper>
                <DeliveryLink to="/insufficentsubtotal">
                  <DeliveryButton>
                    <h3 className="click-btn delivery">Delivery</h3>
                  </DeliveryButton>
                </DeliveryLink>
                <img
                  src={deliverySvg}
                  alt="Illustration featuring a car getting to its delivery destination."
                ></img>
              </DeliveryWrapper>
            )}
            <PickupWrapper>
              <PickupLink to="/pickupcheckout">
                <PickupButton>
                  <h3
                    className="click-btn pickup"
                    alt="An illustration showing a woman and a man sitting down having lunch at a restaurant."
                  >
                    Pickup
                  </h3>
                </PickupButton>
              </PickupLink>
              <img src={pickupSvg}></img>
            </PickupWrapper>
          </TwoBoxContainer>
        </Wrapper>
      </OptionalDeliveryContainer>
      <Footer />
    </>
  );
};

const OptionalDeliveryContainer = styled.div`
/*margin-top: 60px */
/*padding: 20px 0; */
  min-height: 80vh;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid black;
  color: white;
  background: white;
`;

const TwoBoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  align-items: center;
  padding: 3em 0em;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    img {
      display: none;
    }
    flex-direction: column;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  h1 {
    color: black;
  }
`;

const DeliveryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    width: 175px;
    height: 175px;
  }

  @media screen and (max-width: 550px) {
    img {
      width: 100px;
      height: 100px;
    }
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const DeliveryLink = styled(Link)`
  width: 70%;
`;

const DeliveryButton = styled.button`
  padding: 0.4em;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  background: black;
  box-shadow: 2 2px 3px rgba(0, 0, 0.1, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    transform: scale(1.1);
  }
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .click-btn {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    line-height: 35px;
    border: 1px solid;
    text-align: center;
    font-size: 2.7rem;
    text-decoration: none;
    transition: all 0.35s;
    box-sizing: border-box;
    @media screen and (max-width: 550px) {
      height: 50px;
    }
  }
  .delivery {
    position: relative;
    border-color: transparent;
    color: white;
    &::before,
    &::after {
      height: 100%;
      position: absolute;
      top: 0;
      transition: all 0.3s;
      content: "";
    }

    &::after {
      width: 0;
      left: 50%;
      border-bottom: 1px solid transparent;
      transform: translate(-50%, 0);
      z-index: 1;
    }
    &:hover {
      &::before {
        transform: scale(0, 1);
      }
      &::after {
        width: 100%;
        border-color: white;
        transition-delay: 0.2s;
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;

const PickupWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    width: 175px;
    height: 175px;
  }
  @media screen and (max-width: 550px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const PickupLink = styled(Link)`
  width: 70%;
`;

const PickupButton = styled.button`
  padding: 0.4em;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  background: black;
  box-shadow: 2 2px 3px rgba(0, 0, 0.1, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    transform: scale(1.1);
  }
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .click-btn {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    line-height: 35px;
    border: 1px solid;
    text-align: center;
    font-size: 2.7rem;
    text-decoration: none;
    transition: all 0.35s;
    box-sizing: border-box;
    @media screen and (max-width: 550px) {
      height: 50px;
    }
  }
  .pickup {
    position: relative;
    border-color: transparent;
    color: white;
    &::before,
    &::after {
      height: 100%;
      position: absolute;
      top: 0;
      transition: all 0.3s;
      content: "";
    }
    &::after {
      width: 0;
      left: 50%;
      border-bottom: 1px solid transparent;
      transform: translate(-50%, 0);
      z-index: 1;
    }
    &:hover {
      &::before {
        transform: scale(0, 1);
      }
      &::after {
        width: 100%;
        border-color: white;
        transition-delay: 0.2s;
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;
export default OptionalDelivery;
