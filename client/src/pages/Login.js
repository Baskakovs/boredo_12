import React from 'react';
import styled from 'styled-components';
import LoginSignupWindow from '../components/large/LoginSignupWindow';
import BackgroundImage from '../images/BusanImage.png'
import Errors from '../components/small/Errors';

const Box = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`;

const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2); // Change the color and opacity here
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-left: 15%; // Add your desired margin value here

  @media screen and (max-width: 820px) {
    margin: 0; // Reset the margin on smaller screens
  }
`;

const ImageTitle = styled.h1`
  position: absolute;
  bottom: -8px;
  right: 24px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: white;
  z-index: 1;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const BoxLogin = styled.div`
  margin-top: %;
`

const Login = () => {
  return (
    <Box>
      <ContentWrapper>
        <LoginSignupWindow />
        <Errors/>
      </ContentWrapper>
      <ImageTitle>Busan, South Korea</ImageTitle>
      <ImageBackground src={BackgroundImage} />
      <ColorOverlay />
    </Box>
  );
};

export default Login;
