// MobileHome.jsx

import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Carousel } from "react-responsive-carousel";
const MobileHomeContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  width: 100vw;
  background-image: url("");
  justify-content: space-between; /* Align content vertically */
`;

const ContentSection = styled.section`
  padding: 20px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const CircleCard = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CircleImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #333; /* Add a border around the circle */
  margin: 0 auto;
`;

const CircleText = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
`;
const CarouselContainer = styled.div`
  width: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0; /* Adjust the padding as needed */
`;
const Heading2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

const MobileHome = () => {
  return (
    <MobileHomeContainer>
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
    </MobileHomeContainer>
  );
};

export default MobileHome;
