import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Catering = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility</title>
        <meta
          name="description"
          content="Get party packages for your event at Tortas Mexico Studio City. Discover our commitment to providing a quality dining experience."
        />
        <link rel="canonical" href="/party-packages"></link>
      </Helmet>
  
      <Navbar />
      <CateringContainer>
         <CateringWrapper>
            <CateringSlider>

            </CateringSlider>
            <CateringMenu>
                <CateringTitle>
                    Tortas Mexico Studio City's Party Packages
                </CateringTitle>
                <CateringTitleDescription>

                </CateringTitleDescription>
            </CateringMenu>
         </CateringWrapper>
      </CateringContainer>
    <Footer/>
    </>
  )
}

const CateringContainer = styled.div`

`
const CateringSlider = styled.div`

`
const CateringTitle = styled.h2`

`
const CateringTitleDescription = styled.span`

`
const CateringMenu = styled.div`

`


const CateringWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
margin-top: 11vh;
width: 100%;
background: white;

`

export default Catering