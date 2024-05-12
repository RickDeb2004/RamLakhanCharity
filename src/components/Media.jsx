// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firbase";

const MediaWrapper = styled.div`
  padding: 20px; /* Adjust the padding as needed */
`;

const HeroSection = styled.section`
  background-image: url("images/DSC06815.JPG"); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0; /* Adjust the padding as needed */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MediaCard = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  @media (max-width:768px){
    flex: 0 0 calc(33.333% - 20px)
    margin-bottom: 20px;
  }
`;

const MediaVideo = styled.video`
  max-width: 100%;
  height: 500px;
`;

const Media = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const videolistref = ref(storage, "videos/");

  useEffect(() => {
    listAll(videolistref)
      .then((response) => {
        console.log(response);
        const urls = response.items.map((item) => getDownloadURL(item));
        Promise.all(urls)
          .then((urlArray) => {
            setVideoUrls(urlArray);
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
    <MediaWrapper>
      <Navbar />
      <HeroSection></HeroSection>

      <MediaContainer>
        {videoUrls.map((videoUrl, index) => (
          <MediaCard key={index}>
            <MediaVideo
              controls
              src={videoUrl}
              alt={`Project ${index + 1}`}
              loading="lazy"
            />
          </MediaCard>
        ))}
      </MediaContainer>
      <Footer />
    </MediaWrapper>
  );
};

export default Media;
