import React from 'react';

import { 
  StyledContainer, 
  NavbarStyled, 
  BrandStyled, 
  NavStyled,
  LinkStyled
} from './navbar.styles';

import { Navbar } from 'react-bootstrap';

const NavbarMain = () => (
  <StyledContainer>
    <NavbarStyled collapseOnSelect expand="lg" bg="default" variant="default">
      <BrandStyled href="#home">BiznesRivoj</BrandStyled>
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavStyled className="ml-auto">
          <LinkStyled href="#Link">Link</LinkStyled>
          <LinkStyled href="#Link">Link</LinkStyled>
          <LinkStyled href="#Link">Link</LinkStyled>
          <LinkStyled eventKey={2} href="#memes">
            Link
          </LinkStyled>
        </NavStyled>
      </Navbar.Collapse>
    </NavbarStyled>
  </StyledContainer>
);

export default NavbarMain;