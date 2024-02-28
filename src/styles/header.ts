import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #ADD8E6;  /* Light Blue color */
  color: black;  /* Change text color to black */
  padding: 10px 0;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;  /* Change text color to black */
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLinkInput = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;  /* Change text color to black */
`;
