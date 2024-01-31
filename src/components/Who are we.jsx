// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WhoAreWeWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #f7f7f7;
  background-image: url("src/components/images/hmn11.jpg");
`;

const HeroSection = styled.section`
  background-image: url("src/components/images/DSC06815.JPG"); /* Replace with your hero image path */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */

  @media (max-width: 768px) {
    padding: 60px 0; /* Adjusted padding for smaller screens */
  }
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

  @media (max-width: 768px) {
    padding: 30px 20px; /* Adjusted padding for smaller screens */
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const ProjectCard = styled.div`
  flex: 25%; /* 25% of the row */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 20px;
`;

const ProjectCardHeading = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectCardContent = styled.p`
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  gap: 20px;
`;
const Paragraph = styled.div`
  font-weight: 500;
`;
const WhoAreWe = () => {
  return (
    <WhoAreWeWrapper>
      <Navbar />
      <HeroSection>
        <HeroImage /> {/* Replace with your hero image path */}
      </HeroSection>

      <ContentSection>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          urna eu libero fringilla, eget suscipit libero vehicula.
        </Paragraph>
        {/* Additional content */}
      </ContentSection>

      {/* First Row */}

      <Row>
        <ContentGrid>
          <ProjectCard style={{ flex: "75%" }}>
            <h3>OBJECTIVES OF THE TRUST</h3>
            <p>
              To provide underprivileged students with a solid foundation and a
              high-quality education. To provide food and shelter, books, study
              materials, tuition, training, scholarships, and so on to deserving
              students. To provide assistance to old age facilities to improve
              living condition for the elderly. To provide medical and health
              services to low-income and needy communities. To provide support
              and assistance to hospitals in setting up the various facilities
              such as Blood Bank, Eye Bank, Burn Centres, etc., for poor
              patients. To assist physically challenged people in achieving
              their goals. To save cows and cattle and to provide them with the
              utmost care and devotion. Participate in social, cultural, and
              literary activities to promote the nation’s cultural values. To
              establish, support, and maintain educational institutes in need of
              upliftment
            </p>
          </ProjectCard>
          <ProjectCard style={{ flex: "25%" }}>
            <ProjectCardHeading>Our Values</ProjectCardHeading>
            <ProjectCardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique urna eu libero fringilla, eget suscipit libero vehicula.
            </ProjectCardContent>
          </ProjectCard>
        </ContentGrid>
      </Row>
      <div style={{ marginBottom: "20px" }}></div>

      {/* Second Row */}
      <Row>
        <ProjectCard>
          <ProjectCardHeading>MISSION</ProjectCardHeading>
          <ProjectCardContent>
            To impart, develop, and uplift society and mankind through the
            highest level of excellence in Education, Health, and Social
            Services.
          </ProjectCardContent>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>VISION</ProjectCardHeading>
          <ProjectCardContent>
            Trust with the goal of social, charitable, health, educational and
            intellectual values as well as enhance the standard of mankind and
            society
          </ProjectCardContent>
        </ProjectCard>
      </Row>
      <div style={{ marginBottom: "10px" }}></div>
      <Footer />
    </WhoAreWeWrapper>
  );
};

export default WhoAreWe;
