import React from 'react';

import { 
  StyledContainer, 
  BrandHolder, 
  Container,
  ContactInfo,
  IconWrapper,
  FacebookIcon,
  InstagramIcon
} from './footer.styles';

import IconInstagram from '../../assets/icons/insta.icon.main.png';
import IconFacebook  from '../../assets/icons/facebook2.png';

const Footer = () => (
  <StyledContainer>
    <BrandHolder>
      <span>BiznesRivoj</span>
    </BrandHolder>
    <Container>
      <ContactInfo>
        <span>+998 91 123 45 67</span>
        <span>someone@gmail.com</span>
      </ContactInfo>
      <IconWrapper>
        <InstagramIcon><img src={IconInstagram} alt="icon-instagram"/></InstagramIcon>
        <FacebookIcon><img src={IconFacebook} alt="icon-facebook"/></FacebookIcon>
      </IconWrapper>
    </Container>
  </StyledContainer>
);

export default Footer;