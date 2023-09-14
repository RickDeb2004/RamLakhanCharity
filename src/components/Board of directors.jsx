// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

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
  height: auto;
  border-radius: 4px;
`;

const CardDescription = styled.p`
  margin-top: 10px;
`;

const BoardOfDirectors = () => {
  const directorsData = [
    {
      id: 1,
      name: 'Director 1',
      imageSrc: '/path-to-image-1.jpg', // Replace with actual image path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Director 2',
      imageSrc: '/path-to-image-2.jpg', // Replace with actual image path
      description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
    },
    // Add more director data objects as needed
  ];

  return (
    <BoardOfDirectorsWrapper>
      <Navbar />
      <CardContainer>
        {directorsData.map((director) => (
          <Card key={director.id}>
            <CardImage src={director.imageSrc} alt={director.name} />
            <h3>{director.name}</h3>
            <CardDescription>{director.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </BoardOfDirectorsWrapper>
  );
};

export default BoardOfDirectors;
