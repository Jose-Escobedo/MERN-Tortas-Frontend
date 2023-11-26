import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Catering = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



  return (
    <>
      <Helmet>
        <title>Catering</title>
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
                <h2>CATERING & PRIVATE EVENTS</h2>
<img alt ="avocado and limones"className="catering-image"  src={
            windowWidth <= 770
              ? 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/mobilesalsas.jpg?alt=media&token=e48f7f30-42a5-4eca-b93a-f6000d54854c'
              : 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/avocadodesktop.jpg?alt=media&token=f6b6dd01-7de2-4126-9a0c-df507d63f367'
          }>

</img>
            </CateringSlider>
            <CateringMenu>
                <CateringTitle>
                    Tortas Mexico Studio City's Party Packages
                </CateringTitle>
                <CateringTitleDescription>
                All packages come with Spanish-style rice, beans, chips, and salsa. Prices are per person for pick up only. There will be an extra charge for delivery in disposable trays. All party packages have a minimum order of 15 people. For smaller groups, we recommend ordering A la Carte trays or individual meals.
                </CateringTitleDescription>
                <CateringTitleDescription>
                We also offer our FULL SERVICE with chafing dishes, serving bowls, and serving utensils plus a catering specialist to serve the buffet, help pick up dirty plates and keep the buffet clean and stocked. Please call for prices.
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
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: relative;

h2{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 3;
  font-size: 3rem;
}

img{
    width: 100%;
    height: 111vh;
    opacity: 0.8;
}
`
const CateringTitle = styled.h2`

`
const CateringTitleDescription = styled.span`
padding: 10px;
`
const CateringMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


const CateringWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 120vh;
width: 100%;
background: white;

`

export default Catering