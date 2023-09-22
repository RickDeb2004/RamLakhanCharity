// Removed unused import statement
// import React from 'react';

import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import useFirestore from '../hooks/useFirestore';
// Removed unused import statement
// import styled from 'styled-components';

const InHighlightsWrapper = styled.div`
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
  background-image: url('src/components/images/DSC06815.JPG');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
`;

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 25px;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectCardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const InHighlights = () => {
  const { docs: imageDocs } = useFirestore('images');

  return (
    <InHighlightsWrapper>
      <Navbar />
      <HeroSection>{/* Replace with your hero image path */}</HeroSection>
      <ProjectCardsContainer>
        {imageDocs.map((imageDoc, index) => (
          <ProjectCard key={index}>
            <ProjectCardImage src={imageDoc.url} alt={`Project ${index + 1}`} />
            {/* Additional content for Project Card */}
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
      <Footer />
    </InHighlightsWrapper>
  );
};

export default InHighlights;
