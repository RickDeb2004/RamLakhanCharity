import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../firbase'; // Import your Firebase storage configuration

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
  const [imageUrls, setImageUrls] = useState([]);
  const imagelistref = ref(storage, 'images/');

  // useEffect(() => {
  //   listAll(imagelistref)
  //     .then((response) => {
  //       response.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImageUrls((prev) => [...prev, url]);
  //         });
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching image URLs:', error);
  //     });
  // }, []); // Add imagelistref to the dependency array
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
            console.error('Error fetching image URLs:', error);
          });
      })
      .catch((error) => {
        console.error('Error listing images:', error);
      });
  }, []);

  
// console.log(imageUrls);
  return (
    <InHighlightsWrapper>
      <Navbar />
      <HeroSection>
        {/* Replace with your hero image path */}
      </HeroSection>
      <ProjectCardsContainer>
        {imageUrls.map((imageUrl, index) => (
          <ProjectCard key={index}>
            <ProjectCardImage src={imageUrl} alt={`Project ${index + 1}`} />
            {/* Additional content for Project Card */}
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
      <Footer />
    </InHighlightsWrapper>
  );
};

export default InHighlights;
