import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuGridList from "../components/MenuGridList";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <MenuPageContainer>
      <Helmet>
        <title>Menu</title>
        <meta
          name="description"
          content="Discover our mouthwatering menu of authentic Mexican tortas at Tortas Mexico Studio City. Experience the best flavors of Mexico in every bite!"
        />
        <link rel="canonical" href="/menu"></link>
      </Helmet>
      <Navbar></Navbar>
      <TitleContainer>
        <Title>Menu</Title>
        <MenuCatPicture>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/TacoChef.png?alt=media&token=12efb46e-9f85-4be8-a9b1-5f8022cdd779"
            }
            alt="illustraion of a taco that looks like a chef"
          ></img>
        </MenuCatPicture>
      </TitleContainer>
      <MenuGridList id="menu-grid"></MenuGridList>
      <Footer></Footer>
    </MenuPageContainer>
  );
};

const MenuPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  background: #fcf5f5;
`;
const MenuCatPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
  img {
    width: 160px;
    height: 160px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
  padding-top: 50px;
`;
const Title = styled.h1`
  font-size: 4rem;
`;

export default Menu;
