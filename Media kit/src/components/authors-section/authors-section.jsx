import React from 'react';

import { 
  StyledContainer,
  Heading, 
  Row, 
  TextWrapper, 
  ImageWrapper,
  P
} from './authors-section.styles';

import ImageMain from '../../assets/images/ppl.png';

const AuthorsSection = () => (
  <StyledContainer>
    <Heading>Creators of this Website</Heading>
    <Row>
      <TextWrapper>
        <P>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </P>
      </TextWrapper>
      <ImageWrapper>
        <img src={ImageMain} alt="web-creators"/>
      </ImageWrapper>
    </Row>
  </StyledContainer>
);

export default AuthorsSection;