// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const WhoAreWeWrapper = styled.div`
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
  background-image: url('src/components/images/DSC06815.JPG'); /* Replace with your hero image path */
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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Content = styled.div`
  flex: 75%; /* 75% of the row */
`;

const ProjectCard = styled.div`
  flex: 25%; /* 25% of the row */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectCardHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectCardContent = styled.p`
  font-size: 16px;
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

      {/* First Row */}
      <Row>
        <Content>
          <h3>OBJECTIVES OF THE TRUST</h3>
          <p>
          To provide underprivileged students with a solid foundation and a high-quality education.
To provide food and shelter, books, study materials, tuition, training, scholarships, and so on to deserving students.
To provide assistance to old age facilities to improve living condition for the elderly.
To provide medical and health services to low-income and needy communities.
To provide support and assistance to hospitals in setting up the various facilities such as Blood Bank, Eye Bank, Burn Centres, etc., for poor patients.
To assist physically challenged people in achieving their goals.
To save cows and cattle and to provide them with the utmost care and devotion.
Participate in social, cultural, and literary activities to promote the nation’s cultural values.
To establish, support, and maintain educational institutes in need of upliftment
          </p>
        </Content>
        <ProjectCard>
          <ProjectCardHeading>Our Values</ProjectCardHeading>
          <ProjectCardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu libero
            fringilla, eget suscipit libero vehicula.
          </ProjectCardContent>
        </ProjectCard>
      </Row>

      {/* Second Row */}
      <Row>
        <ProjectCard>
          <ProjectCardHeading>MISSION</ProjectCardHeading>
          <ProjectCardContent>
          To impart, develop, and uplift society and mankind through the highest level of excellence in Education, Health, and Social Services.
          </ProjectCardContent>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>VISION</ProjectCardHeading>
          <ProjectCardContent>
          Trust with the goal of social, charitable, health, educational and intellectual values as well as enhance the standard of mankind and society
          </ProjectCardContent>
        </ProjectCard>
      </Row>

      <Footer />
    </WhoAreWeWrapper>
  );
};

export default WhoAreWe;
