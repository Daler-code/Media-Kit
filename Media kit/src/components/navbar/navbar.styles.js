import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';


export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavbarStyled = styled(Navbar)`
  width: 100%;
  height: 85px;
  background-color: #1B1B1E;
`;

export const BrandStyled = styled(Navbar.Brand)`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-left: 30px;
  &:hover {
    color: white;
  }
`;

export const NavStyled = styled(Nav)`
  margin-right: 130px;
  margin-top: 30px;
`;

export const LinkStyled = styled(Nav.Link)`
  font-size: 18px;
  color: white;
  margin-left: 25px;
  margin-right: 25px;
  &:hover {
    color: white;
  }
`;