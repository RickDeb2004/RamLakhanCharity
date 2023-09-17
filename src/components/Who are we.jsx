// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const WhoAreWeWrapper = styled.div`
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
  background-image: url(''); /* Replace with your hero image path */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
  
`;
const HeroImage = styled.img`
  max-width: 400px; /* Ensure the image doesn't exceed its container */
  height: 400px; /* Maintain the aspect ratio */
  display: block; /* Remove any extra spacing */
  margin: 0 auto; /* Center the image horizontally */
`;
const ContentSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const WhoAreWe = () => {
  return (
    <WhoAreWeWrapper>
      <Navbar />
      <HeroSection>
        <HeroImage /> {/* Replace with your hero image path */}
      </HeroSection>

      <ContentSection>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu libero
          fringilla, eget suscipit libero vehicula.
        </p>
        {/* Additional content */}
      </ContentSection>
      <Footer/>
    </WhoAreWeWrapper>
  );
};

export default WhoAreWe;
