// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // Import your Navbar component here
import Footer from './Footer';

const MediaWrapper = styled.div`
  padding: 20px; /* Adjust the padding as needed */
`;

const HeroSection = styled.section`
  background-image: url('src/components/images/DSC06815.JPG'); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const HeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0; /* Adjust the padding as needed */
`;

const MediaCard = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const MediaVideo = styled.video`
  max-width: 100%;
  height: auto;
`;

const Description = styled.p`
  font-weight: bold;
`;

const Media = () => {
  return (
    <MediaWrapper>
      <Navbar />
      <HeroSection>
        <HeroText>
          <h1>Media</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </HeroText>
      </HeroSection>

      <MediaContainer>
        <MediaCard>
          <MediaVideo controls>
            <source src="src\components\videos\VID-20230918-WA0010.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </MediaVideo>
          <Description>Description 1</Description>
        </MediaCard>
        <MediaCard>
          <MediaVideo controls>
            <source src="src\components\videos\VID-20230918-WA0011.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </MediaVideo>
          <Description>Description 2</Description>
        </MediaCard>
        <MediaCard>
          <MediaVideo controls>
            <source src="src\components\videos\VID-20230918-WA0012.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </MediaVideo>
          <Description>Description 3</Description>
        </MediaCard>
      </MediaContainer>
      <Footer />
    </MediaWrapper>
  );
};

export default Media;
