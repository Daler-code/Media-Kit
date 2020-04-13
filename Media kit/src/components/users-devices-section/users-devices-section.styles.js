import styled from 'styled-components';


export const StyledContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #B9B8FF;
  @media screen and ( max-width: 776px ) {
    height: fit-content;
  }
`;

export const Row = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media screen and ( max-width: 991px ) {
    width: 100%;
    justify-content: space-between;
  }
  @media screen and ( max-width: 776px ) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;


export const ContainerFirst = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover; 
  img {
    width: 60%;
    height: 100px;
    margin-left: 20px;
    margin-top: 80px;
  }
  @media screen and ( max-width: 776px ) {
    width: 50%;
    margin-bottom: 50px;
  }
`;

export const ContainerSecond = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover; 
  img {
    width: 100%;
    height: 200px;
    margin-bottom: -20px;
  }
  @media screen and ( max-width: 776px ) {
    width: 50%;
    margin-bottom: 50px;
  }
`;

export const ContainerThird = styled.div`
width: 30%;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
background-position: center;
background-size: cover; 
  img {
    width: 70%;
    height: 180px;
  }
  @media screen and ( max-width: 776px ) {
    width: 50%;
    margin-bottom: 50px;
  }
`;

export const Percentage = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 40px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-top: 20px;
`;