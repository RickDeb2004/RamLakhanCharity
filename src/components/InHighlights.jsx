// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // Import your Navbar component here
import Footer from './Footer';

const InHighlightsWrapper = styled.div`
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

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns in a row */
  gap: 20px; /* Adjust the gap between cards as needed */
  padding: 25px; /* Adjust the padding as needed */
  justify-content: center; /* Center align cards horizontally */
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  /* Additional styling for the project card goes here */
`;

const ProjectCardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const InHighlights = () => {
  return (
    <InHighlightsWrapper>
      <Navbar />

      <HeroSection>
         {/* Replace with your hero image path */}
      </HeroSection>

      <ProjectCardsContainer>
        {/* Project Card 1 */}
        <ProjectCard>
          <ProjectCardImage src="src\components\images\1528e0fe-1199-48a6-8f62-87a42d23d856.jpg" alt="Project 1" />
          {/* Additional content for Project Card 1 */}
        </ProjectCard>

        {/* Project Card 2 */}
        <ProjectCard>
          <ProjectCardImage src="src\components\images\a7836d5d-1696-4f06-ba36-bcd1ebfdc940.jpg" alt="Project 2" />
          {/* Additional content for Project Card 2 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src\components\images\b8b6b4e7-3655-41c9-a101-8caf0af034bf.jpg" alt="Project 1" />
          {/* Additional content for Project Card 3 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src\components\images\C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034.JPEG" alt="Project 1" />
          {/* Additional content for Project Card 4 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src\components\images\ef832386-6c4e-4c80-bfaf-5e9d0ce36738.jpg" alt="Project 1" />
          {/* Additional content for Project Card 5 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src\components\images\fadd8a82-1e35-4b7f-8421-de4d4446c513.jpg" alt="Project 1" />
          {/* Additional content for Project Card 6 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src\components\images\fd3622c1-91a5-4c26-8357-5f71df50b0d8.jpg" alt="Project 1" />
          {/* Additional content for Project Card 7 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src/components/images/project-image-1.jpg" alt="Project 1" />
          {/* Additional content for Project Card 8 */}
        </ProjectCard>
        <ProjectCard>
          <ProjectCardImage src="src/components/images/project-image-1.jpg" alt="Project 1" />
          {/* Additional content for Project Card 9 */}
        </ProjectCard>

        {/* Add more Project Cards (3x3 grid) */}
      </ProjectCardsContainer>

      <Footer />
    </InHighlightsWrapper>
  );
};

export default InHighlights;
