import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  @media screen and ( max-width: 991px ) {
    height: fit-content;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and ( max-width: 991px ) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #6562FA;
  padding-top: 40px;
  @media screen and ( max-width: 991px ) {
    font-size: 28px;
  }
`;

export const TextWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  @media screen and ( max-width: 991px ) {
    margin-bottom: 50px;
  }
  @media screen and ( max-width: 991px ) {
    order: 1;
    margin-top: 80px;
    margin-bottom: 50px;
  }
`;

export const P = styled.div`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  padding-left: 150px;
  padding-right: 70px;
  @media screen and ( max-width: 1100px ) {
    padding-left: 50px;
  }
`;

export const ImageWrapper = styled.div`
  width: fit-content;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-position: center;
  background-size: cover;
  img {
    width: 90%;
    height: 70%;
  }
  @media screen and ( max-width: 991px ) {
    order: 2;
    margin-bottom: 50px;
    img {
      width: 75%;
      height: 100%;
    }
  }
`;