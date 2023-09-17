// Import necessary libraries and components

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // Import your Navbar component here
import Footer from './Footer'; // Import your Footer component here

// Styled components for styling

const MissionVisionWrapper = styled.div`
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
  background-image: url('/path-to-hero-image.jpg'); /* Replace with your hero image path */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const VisionHeading = styled.h2`
  font-size: 36px; /* Adjust the font size as needed */
  font-weight: bold;
  margin-top: 20px; /* Adjust the margin as needed */
  text-align:center;
`;

const VisionContent = styled.p`
  font-size: 18px; /* Adjust the font size as needed */
  margin-top: 20px; /* Adjust the margin as needed */
`;

const MissionHeading = styled.h2`
  font-size: 36px; /* Adjust the font size as needed */
  font-weight: bold;
  margin-top: 40px; /* Adjust the margin as needed */
  text-align:center;
`;

const MissionContent = styled.p`
  font-size: 18px; /* Adjust the font size as needed */
  margin-top: 20px; /* Adjust the margin as needed */
`;

// Mission and Vision component

const MissionAndVision = () => {
  return (
    <MissionVisionWrapper>
      <Navbar />
      <HeroSection>
        <img src="/path-to-hero-image.jpg" alt="Hero" /> {/* Replace with your hero image path */}
      </HeroSection>

      <VisionHeading>Vision</VisionHeading>
      <VisionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu libero
        fringilla, eget suscipit libero vehicula.
      </VisionContent>

      <MissionHeading>Mission</MissionHeading>
      <MissionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu libero
        fringilla, eget suscipit libero vehicula.
      </MissionContent>

      <Footer />
    </MissionVisionWrapper>
  );
};

export default MissionAndVision;
