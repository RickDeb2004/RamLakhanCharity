// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 0;
`;

const NavContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &.active {
    border-bottom: 2px solid white;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavContainer>
        <h1>Your Logo</h1>
        <NavLinks>
          <NavLinkItem exact to="/">
            Home
          </NavLinkItem>
          <NavLinkItem to="/about">About Us</NavLinkItem>
          <NavLinkItem to="/what-we-do">What We Do</NavLinkItem>
          <NavLinkItem to="/pic">Pic</NavLinkItem>
          <NavLinkItem to="/media">Media</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
          <NavLinkItem to="/doctor-profile">Doctors-profile</NavLinkItem>
        </NavLinks>
      </NavContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
