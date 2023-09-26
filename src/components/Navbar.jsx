// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px; /* Adjust the padding as needed */
`;

const NavContainer = styled.div`
  width: 100%; /* Adjust the width to make the Navbar full width */
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props['data-isopen']? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    padding: 10px;
    width: 100%;
  }
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &.active {
    border-bottom: 2px solid white;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props['data-isopen']? 'block' : 'none')};
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
  top: 100%;
  left: 0;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #555;
  }
`;

const LogoImage = styled.img`
  max-width: 50px; /* Adjust the max-width as needed */

`;

const HamBarIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <NavContainer>
        <HamBarIcon onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </HamBarIcon>
        <LogoImage src="src\components\images\logo (1).png" alt="Your Logo" />
        <NavLinks data-isopen={isMobileMenuOpen}>
          <NavLinkItem exact='true' to="/home">
            Home
          </NavLinkItem>
          <Dropdown>
           
            <span onClick={toggleDropdown}>About Us</span>
            <DropdownContent data-isopen={isDropdownOpen}>
              <DropdownItem to="/who-are-we">Who Are We</DropdownItem>
              <DropdownItem to="/board-of-directors">Board Of Directors And Members</DropdownItem>
            </DropdownContent>
            
          </Dropdown>
          <NavLinkItem to="/in-highlights">In-Highlights</NavLinkItem>
          <NavLinkItem to="/pic">Gallery</NavLinkItem>
          <NavLinkItem to="/media">Media</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
          <NavLinkItem to="/doctor-profile">Doctors-profile</NavLinkItem>
        </NavLinks>
      </NavContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
