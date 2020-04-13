import React from 'react';

import { 
  StyledContainer,
  Row,
  Heading,
  TextWrapper,
  P,
  ImageWrapper
} from './how-we-do-section.styles';

import ImageMain from '../../assets/images/gg.png';


const HowWeDoSection = () => (
  <StyledContainer>
    <Heading>How We Do It</Heading>
    <Row>
      <ImageWrapper>
        <img src={ImageMain} alt="main-img"/>
      </ImageWrapper>
      <TextWrapper>
        <P>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
          Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </P>
      </TextWrapper>
    </Row>
  </StyledContainer>
);

export default HowWeDoSection;