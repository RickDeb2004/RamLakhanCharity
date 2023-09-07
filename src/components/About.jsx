// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar'; // Import your Navbar component here

const AboutWrapper = styled.div`
  padding: 20px; /* Adjust the padding as needed */
`;

const HeroSection = styled.section`
  background-image: url('/path-to-hero-image.jpg'); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const HeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0; /* Adjust the padding as needed */
`;

const Paragraph = styled.p`
  flex: 1;
`;

const SquareBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0; /* Adjust the padding as needed */
`;

const SquareBox = styled.div`
  flex: 1;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const QuestionLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin-top: 10px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <HeroSection>
        <HeroText>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </HeroText>
      </HeroSection>

      <ParagraphContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna eu libero fringilla, eget
          suscipit libero vehicula.
        </Paragraph>
        <SquareBoxContainer>
          <SquareBox>
            <h2>5 Questions</h2>
            <p>Question 1</p>
            <p>Question 2</p>
            <p>Question 3</p>
            <p>Question 4</p>
            <p>Question 5</p>
            <QuestionLink href="#">View All</QuestionLink>
          </SquareBox>
        </SquareBoxContainer>
      </ParagraphContainer>
    </AboutWrapper>
  );
};

export default About;
