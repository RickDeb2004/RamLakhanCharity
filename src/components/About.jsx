// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutWrapper = styled.div`
  padding: 20px; /* Adjust the padding as needed */
`;

const HeroSection = styled.section`
  background-image: url("/path-to-hero-image.jpg"); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const HeroText = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600px;
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
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

const Paragraph1 = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
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
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </HeroText>
      </HeroSection>

      <ParagraphContainer>
        <Paragraph1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          urna eu libero fringilla, eget suscipit libero vehicula.
        </Paragraph1>
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
      <Footer />
    </AboutWrapper>
  );
};

export default About;
