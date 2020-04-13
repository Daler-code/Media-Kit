import React from 'react';

import { 
  StyledContainer, 
  Row,
  ContainerFirst,
  ContainerSecond,
  ContainerThird,
  Percentage,
  Title
} from './users-devices-section.styles';

import ImagePhone from '../../assets/images/phone.white.png';
import ImageDesktop from '../../assets/images/ipad.pro.png';
import ImageTablet from '../../assets/images/tablet.png';


const UserDevicesSection = () => (
  <StyledContainer>
    <Row>
      <ContainerFirst>
        <img src={ImagePhone} alt="mobile-phone"/>
        <Percentage>60%</Percentage>
        <Title>Mobile Users</Title>
      </ContainerFirst>
      <ContainerSecond>
        <img src={ImageDesktop} alt="desktop"/>
        <Percentage>30%</Percentage>
        <Title>Desktop Users</Title>
      </ContainerSecond>
      <ContainerThird>
        <img src={ImageTablet} alt="tablet"/>
        <Percentage>10%</Percentage>
        <Title>Tablet Users</Title>
      </ContainerThird>
    </Row>
  </StyledContainer>
);

export default UserDevicesSection;