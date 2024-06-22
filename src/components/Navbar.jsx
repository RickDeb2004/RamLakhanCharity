// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
`;

const TopBar = styled.div`
  background-color: #6a1b9a;
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  gap: 10px; /* Add gap between elements */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px; /* Add margin top for spacing */

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props["data-isopen"] ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    padding: 10px;
    width: 100%;
    flex-grow: 1;
    z-index: 100;
  }
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &.active {
    border-bottom: 2px solid white;
  }

  @media (max-width: 768px) {
    z-index: 100;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
    z-index: 1000;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props["data-isopen"] ? "block" : "none")};
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 100;
  top: 100%;
  left: 0;

  @media (max-width: 768px) {
    margin-right: 0;
    z-index: 1000;
  }
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    z-index: 1000;
  }
`;

const LogoImage = styled.img`
  max-width: 50vw; /* Adjust the max-width as needed */

  @media (max-width: 768px) {
    max-width: 15vw;
  }
`;

const HamBarIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: ${(props) =>
    props["data-isopen"]
      ? "500"
      : "1"}; /* Set a high z-index when the mobile menu is open */

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
    setDropdownOpen(false); // Close dropdown when mobile menu is toggled
  };

  return (
    <NavbarWrapper>
      <TopBar>
        <span>Toll Free No. 1800 572 1343</span>
        <span>|</span>
        <span>service@mayacare.org</span>
      </TopBar>
      <NavContainer>
        <HamBarIcon onClick={toggleMobileMenu} data-isopen={isMobileMenuOpen}>
          <FontAwesomeIcon icon={faBars} />
        </HamBarIcon>
        <LogoImage
          src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103952/logo_1_cb3pgi.png"
          alt="Your Logo"
        />
        <NavLinks data-isopen={isMobileMenuOpen}>
          <NavLinkItem exact="true" to="/home">
            Home
          </NavLinkItem>
          <Dropdown>
            <span onClick={toggleDropdown}>About Us</span>
            <DropdownContent data-isopen={isDropdownOpen}>
              <DropdownItem to="/who-are-we">Who Are We</DropdownItem>
              <DropdownItem to="/board-of-directors">
                Board Of Directors And Members
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
          <NavLinkItem to="/in-highlights">In-Highlights</NavLinkItem>
          <NavLinkItem to="/pic">Gallery</NavLinkItem>
          <NavLinkItem to="/media">Media</NavLinkItem>
          <NavLinkItem to="/doctor-profile">Doctors-profile</NavLinkItem>
          <NavLinkItem to="/faq">FAQ</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </NavLinks>
        <NavLinkItem to="#" className="font-bold">
          ESTD:2021
        </NavLinkItem>
      </NavContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
