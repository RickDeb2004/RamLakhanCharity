// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 100px 0; /* Adjust the padding as needed */
`;

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <CarouselContainer>
          <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
            <div>
              <img src="C:\Users\dell\Downloads\WhatsApp Image 2023-08-31 at 14.53.54.jpeg" alt="Image 1" />
            </div>
            <div>
              <img src="C:\Users\dell\Downloads\WhatsApp Image 2023-08-31 at 14.55.46.jpeg" alt="Image 2" />
            </div>
            <div>
              <img src="C:\Users\dell\Downloads\WhatsApp Image 2023-08-31 at 15.05.22.jpeg" alt="Image 3" />
            </div>
            <div>
              <img src="C:\cyborg\gsoc\register2.png" alt="Image 4" />
            </div>
            <div>
              <img src="C:\Users\dell\Downloads\WhatsApp Image 2023-08-31 at 14.55.46.jpeg" alt="Image 5" />
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
    </div>
  );
};

export default Home;
