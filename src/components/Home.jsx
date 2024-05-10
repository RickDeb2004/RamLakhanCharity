// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  background-image: url("");
`;

const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* Adjust the padding as needed */

  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100%; /* Adjust the width as needed */
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Maintain aspect ratio and cover container */
`;

const CircleCard = styled.div`
  text-align: center;
  margin-top: 50px;

  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const CircleImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #333; /* Add a border around the circle */
  margin: 0 auto;
`;

const CircleText = styled.p`
  font-weight: 400;
  font-size: 24px;
  margin-top: 20px;
`;
const Heading2 = styled.h2`
  font-weight: 600;
`;
const Paragraph = styled.p`
  font-weight: 400;
`;
const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <CarouselContainer>
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showThumbs={false}
            interval={3000}
          >
            <div>
              <CarouselImage src="images/DSC06815.JPG" alt="Image 1" />
            </div>
            <div>
              <CarouselImage
                src="images/C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034.JPEG"
                alt="Image 2"
              />
            </div>
            <div>
              <CarouselImage src="images/IMG_5066.JPG" alt="Image 3" />
            </div>
            <div>
              <CarouselImage src="images/IMG_5058.JPG" alt="Image 4" />
            </div>
            <div>
              <CarouselImage src="images/IMG_5068.JPG" alt="Image 5" />
            </div>
          </Carousel>
        </CarouselContainer>
      </HeroSection>

      <ContentSection>
        <Heading2>Welcome to Our Website</Heading2>
        <Paragraph>
          Enter a realm of compassionate care, where healthcare transforms lives
          and nurtures wellbeing.
        </Paragraph>
      </ContentSection>
      <CircleCard>
        <CircleImage src="images\guruji.jpg" alt="Guru Kripa" />
        <CircleText>Guru Kripa</CircleText>
      </CircleCard>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
