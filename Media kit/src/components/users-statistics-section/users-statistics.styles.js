import styled from 'styled-components';


export const StyledContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #B9B8FF;
  @media screen and ( max-width: 776px ) {
    height: fit-content;
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

export const Row = styled.div`
  width: 80%;
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
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover; 
  img {
    width: 180px;
    height: 180px;
  }
  @media screen and ( max-width: 776px ) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const ContainerSecond = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover; 
  img {
    width: 180px;
    height: 180px;
  }
  @media screen and ( max-width: 776px ) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const Percentage = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 20px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-top: 10px;
`;