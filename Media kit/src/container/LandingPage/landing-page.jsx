import React from 'react';

import { StyledContainer } from './landing-page.styles';

import NavbarMain from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const LandingPage = () => (
  <StyledContainer>
    <NavbarMain />
    <Footer />
  </StyledContainer>
);

export default LandingPage;