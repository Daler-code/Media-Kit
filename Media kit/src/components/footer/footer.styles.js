import styled from 'styled-components';


export const StyledContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1B1B1E;
`;

export const BrandHolder = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  span {
    font-size: 25px;
    font-weight: 500;
    color: white;
    margin-left: 45px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 45px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const ContactInfo = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
  span {
    font-size: 15px;
    color: white;
    font-weight: 500;
    margin-left: 25px;
    margin-right: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10px;
  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const FacebookIcon = styled.div`
  img {
    width: 30px;
    height: 25px;
    margin-top: 2px;
  }
  
`;

export const InstagramIcon = styled.div`
img {
  width: 40px;
  height: 25px;
}
`;
