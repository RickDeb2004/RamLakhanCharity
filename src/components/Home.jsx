// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileHome from "./MobileHome";

const HomeContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */

  background: linear-gradient(135deg, #fffdd0, #faf9f6);
`;

const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* Adjust the padding as needed */
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
  /* Adjust the width as needed */
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
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
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
  width: 10vw;
  height: 10vw;
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
  const isMobileView = window.innerWidth < 600;

  return (
    <HomeContainer>
      {isMobileView ? (
        <MobileHome />
      ) : (
        <>
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
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872104/C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034_awetvo.jpg"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872456/IMG_5058_nv3e5d.jpg"
                    alt="Image 2"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103756/IMG_5066_jzx52z.jpg"
                    alt="Image 3"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103861/IMG_5068_ukkr79.jpg"
                    alt="Image 4"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872104/C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034_awetvo.jpg"
                    alt="Image 5"
                  />
                </div>
              </Carousel>
            </CarouselContainer>
          </HeroSection>

          <ContentSection>
            <Heading2>Welcome to Our Website</Heading2>
            <Paragraph>
              Enter a realm of compassionate care, where healthcare transforms
              lives and nurtures wellbeing.
            </Paragraph>
          </ContentSection>
          <CircleCard>
            <CircleImage
              src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103911/guruji_tyijeq.jpg"
              alt="Guru Kripa"
            />
            <CircleText>Guru Kripa</CircleText>
          </CircleCard>
          <Footer />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
