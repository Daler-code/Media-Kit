import styled from 'styled-components';

import { Carousel } from 'react-bootstrap';


export const CarouselStyled = styled(Carousel)`
  width: 100vw;
  height: 500px;
  border: 2px solid red;
`;

export const Item = styled(Carousel.Item)`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
  border: 2px solid green;
  img {
    width: 40%;
    height: 80%;
    /* object-fit: cover; */
    float: right;
  }
`;

export const Caption = styled(Carousel.Caption)`
  width: 50%;
  height: fit-content;
  border: 2px solid blue;
`;