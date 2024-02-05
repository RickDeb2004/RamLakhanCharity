// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firbase";

const BoardOfDirectorsWrapper = styled.div`
  background-color: #f7f7f7;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px; /* Adjust the gap between cards as needed */
  padding: 25px; /* Adjust the padding as needed */
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  //height: auto;
  object-fit: contain;
  border-radius: 4px;
`;

const CardDescription = styled.p`
  margin-top: 10px;
  white-space: pre-line;
`;

const BoardOfDirectors = () => {
  const [directorsData, setDirectorsData] = useState([]);

  useEffect(() => {
    const imagelistref = ref(storage, "board-members/");

    listAll(imagelistref)
      .then((response) => {
        const fetchDirectorsData = response.items.map((item) =>
          getDownloadURL(item).then((url) => ({
            image: url,
            description: getDirectorsDescription(item.name),
            id: item.name,
          }))
        );

        Promise.all(fetchDirectorsData)
          .then((director) => {
            setDirectorsData(director);
          })
          .catch((error) => {
            console.error("Error fetching doctor profiles:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, []);

  const getDirectorsDescription = (name) => {
    const regex = /(\d+)?_([^_]+)_([^_]+)_([^_]+)?\.jpg/i;
    const match = name.match(regex);

    if (match && match.length >= 3) {
      const firstName = capitalizeFirstLetter(match[2]);
      const lastName = capitalizeFirstLetter(match[3]);
      const degree = match[4] ? `${match[4]}` : ""; // Display degree only if it exists
      return `${firstName}\n${lastName}\n${degree}`;
    }

    return "Default description";
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <BoardOfDirectorsWrapper>
      <Navbar />
      <CardContainer>
        {directorsData.map((director) => (
          <Card key={director.id}>
            <CardImage
              src={director.image}
              alt={director.name}
              loading="lazy"
            />
            <h3>{director.name}</h3>
            <CardDescription>{director.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
      <Footer />
    </BoardOfDirectorsWrapper>
  );
};

export default BoardOfDirectors;
