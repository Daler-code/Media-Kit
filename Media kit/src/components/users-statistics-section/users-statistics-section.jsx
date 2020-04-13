import React from 'react';

import { 
  StyledContainer,
  Row,
  ContainerFirst,
  ContainerSecond,
  Percentage,
  Title
} from './users-statistics.styles';

import ImageFemale from '../../assets/images/female.icon.png';
import ImageMale from '../../assets/images/male.icon.png';

const UsersStatistics = () => (
  <StyledContainer>
    <Row>
      <ContainerFirst>
        <img src={ImageFemale} alt="female-user"/>
        <Percentage>45%</Percentage>
        <Title>Female audience</Title>
      </ContainerFirst>
      <ContainerSecond>
        <img src={ImageMale} alt="male-user"/>
        <Percentage>55%</Percentage>
        <Title>Male audience</Title>
      </ContainerSecond>
    </Row>
  </StyledContainer>
);

export default UsersStatistics;