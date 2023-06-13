import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Box from '@mui/material/Box'
import WriteIcon from '../../images/WriteIcon.png'
import ProfileIcon from '../../images/ProfileIcon.png'
import FeedIcon from '../../images/FeedIcon.svg'

const Container = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 145px;
  gap: 80px;

  width: 100vw;
  height: 68px;

  background: #FFFFFF;
  border-top: 1px solid #D1D5DB;

    position: fixed;
    bottom: 0;
    z-index: 1;
    `;

const IconContainer = styled.button`
  width: 34px;
  height: 34px;
  cursor: pointer;

  /* Inside auto layout */

  flex: none;
  flex-grow: 0;
  border: none;
  background-color: transparent;
`;

const FixedContainer = styled(Box)`
position: sticky;
top: 0;
z-index: 1;
background-color: #ffffff;
`

function NavBar() {
  return (
    <FixedContainer>
    <Container>
    <Link to="/">
      <IconContainer>
        <img src={FeedIcon} alt="Feed Icon" />
      </IconContainer>
      </Link>
      <Link to="/profile">
      <IconContainer>
        <img src={ProfileIcon} alt="Profile Icon" />
      </IconContainer>
      </Link>
      <Link to="/write">
      <IconContainer>
        <img src={WriteIcon} alt="Write Icon" />
      </IconContainer>
      </Link>
    </Container>
    </FixedContainer>
  );
}

export default NavBar;
