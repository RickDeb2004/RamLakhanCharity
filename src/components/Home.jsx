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
`;

const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0; /* Adjust the padding as needed */
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
  max-width: 400px;
  max-height: 400px;
  object-fit: cover; /* Maintain aspect ratio and cover container */
`;


const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <CarouselContainer>
          <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}  interval={2000}>
          <div>
              <CarouselImage src="src\components\images\logo (1).png" alt="Image 1" />
            </div>
            <div>
              <CarouselImage src="src\components\images\himanshu.jpeg" alt="Image 2" />
            </div>
            <div>
              <CarouselImage src="src\components\images\chairman.jpeg" alt="Image 3" />
            </div>
            <div>
              <CarouselImage src="src\components\images\agradev.jpeg" alt="Image 4" />
            </div>
            <div>
              <CarouselImage src="src\components\images\nishant.jpeg" alt="Image 5" />
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
      <Footer />
    </HomeContainer>
  );
};

export default Home;
