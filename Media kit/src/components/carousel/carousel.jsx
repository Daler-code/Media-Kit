import React, { useState } from 'react';

import { 
  CarouselStyled, 
  Item, 
  Caption 
} from './carousel.styles';

import ImageMain from '../../assets/images/ppl.png';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselStyled activeIndex={index} onSelect={handleSelect}>
      <Item>
        <Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Caption>
        <img
          src={ImageMain}
          alt="First slide"
          className="d-block"
        />
      </Item>
      <Item>
        <Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Caption>
        <img
          src={ImageMain}
          alt="First slide"
          className="d-block"
        />
      </Item>
      <Item>
        <Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Caption>
        <img
          src={ImageMain}
          alt="First slide"
          className="d-block"
        />
      </Item>
    </CarouselStyled>
  );
};

export default ControlledCarousel;
