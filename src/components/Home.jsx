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

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <CarouselContainer>
          <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
          <div>
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixels.com%2Ffeatured%2Fdoremon-deepak-pengoria.html&psig=AOvVaw3rBl-zFWwutx6p078PO5Bo&ust=1694710548398000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiLv_WGqIEDFQAAAAAdAAAAABAE" alt="Image 1" />
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
      <Footer />
    </HomeContainer>
  );
};

export default Home;
