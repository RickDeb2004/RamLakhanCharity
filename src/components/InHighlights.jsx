import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firbase";

const InHighlightsWrapper = styled.div`
  background: linear-gradient(135deg, #fffdd0, #faf9f6);
`;

const HeroSection = styled.section`
  background-image: url("images/DSC06815.JPG");
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

  @media (max-width: 768px) {
    max-width: 100px;
    height: 50px;
  }
`;

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns in a row */
  gap: 20px; /* Adjust the gap between cards as needed */
  padding: 25px; /* Adjust the padding as needed */
  justify-content: center; /* Center align cards horizontally */
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center
    flex: 100%
    
  }
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: linear-gradient(135deg, #ECD06F, #fff3e0);
  @media (max-width:768px){
    flex-direction: column;
    justify-content: center
    flex: 100%;
  }
`;

const ProjectCardImage = styled.img`
  max-width: 100%;
  max-height: 200px;

  object-fit: contain;
  border-radius: 4px;
`;

const InHighlights = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const imagelistref = ref(storage, "images/");

  useEffect(() => {
    listAll(imagelistref)
      .then((response) => {
        console.log(response);
        const urls = response.items.map((item) => getDownloadURL(item));
        Promise.all(urls)
          .then((urlArray) => {
            setImageUrls(urlArray);
          })
          .catch((error) => {
            console.error("Error fetching image URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);

  return (
    <InHighlightsWrapper>
      <Navbar />
      <HeroSection>
        <HeroImage />
      </HeroSection>
      <ProjectCardsContainer>
        {imageUrls.map((imageUrl, index) => (
          <ProjectCard key={index}>
            <ProjectCardImage src={imageUrl} alt={`Project ${index + 1}`} />
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
      <Footer />
    </InHighlightsWrapper>
  );
};

export default InHighlights;
