// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const QuickLinkItem = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  color: white;
`;

const SocialMediaLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <QuickLinkItem href="/home">Home</QuickLinkItem>
          <QuickLinkItem href="/about">About Us</QuickLinkItem>
          <QuickLinkItem href="/in-highlights">In-Highlights</QuickLinkItem>
          <QuickLinkItem href="/pic">Gallery</QuickLinkItem>
          <QuickLinkItem href="/media">Media</QuickLinkItem>
          <QuickLinkItem href="/contact">Contact</QuickLinkItem>
          <QuickLinkItem href="/doctor-profile">Doctors Profile</QuickLinkItem>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialMediaLink href="https://www.facebook.com/profile.php?id=100076468233609&mibextid=LQQJ4d">
            <FaFacebook />
          </SocialMediaLink>
          <SocialMediaLink href="https://instagram.com/ramlakhan_trust?igshid=MzRlODBiNWFlZA==">
            <FaInstagram />
          </SocialMediaLink>
          <SocialMediaLink href="https://twitter.com/your-twitter-handle">
            <FaTwitter />
          </SocialMediaLink>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <p>Phone: +123 456 789</p>
            <p>Email: example@example.com</p>
          </ContactInfo>
        </FooterSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
