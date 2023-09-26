// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  background-image:url('src/components/images/hmn11.jpg')
`;

const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0; /* Adjust the padding as needed */

  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const CarouselContainer = styled.div`
  max-width: 100%; /* Adjust the width as needed */
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const CarouselImage = styled.img`
  max-width: 800px;
  max-height: 800px;
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
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <CarouselContainer>
          <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} interval={3000}>
            <div>
              <CarouselImage src="src\components\images\DSC06815.JPG" alt="Image 1" />
            </div>
            <div>
              <CarouselImage src="src\components\images\C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034.JPEG" alt="Image 2" />
            </div>
            <div>
              <CarouselImage src="src\components\images\IMG_5066.JPG" alt="Image 3" />
            </div>
            <div>
              <CarouselImage src="src\components\images\IMG_5058.JPG" alt="Image 4" />
            </div>
            <div>
              <CarouselImage src="src\components\images\IMG_5068.JPG" alt="Image 5" />
            </div>
          </Carousel>
        </CarouselContainer>
      </HeroSection>

      <ContentSection>
        <h2>Welcome to Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu
          libero fringilla, eget suscipit libero vehicula.
        </p>
        <p>
          Integer euismod, mi eu congue bibendum, justo ante cursus arcu, quis ultrices
          nunc odio et ex.
        </p>
      </ContentSection>
      <CircleCard>
        <CircleImage src="src\components\images\guruji.jpg" alt="Guru Kripa" />
        <CircleText>Guru Kripa</CircleText>
      </CircleCard>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
