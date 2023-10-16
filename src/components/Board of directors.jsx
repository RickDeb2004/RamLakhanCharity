// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../firbase'; 

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
  object-fit:contain;
  border-radius: 4px;
`;

const CardDescription = styled.p`
  margin-top: 10px;
`;

const BoardOfDirectors = () => {
  // const directorsData = [
  //   {
  //     id: 1,
  //     name: 'ARGADEV SHARMA',
  //     imageSrc: 'src/components/images/agradev.jpeg', // Replace with actual image path
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   },
  //   {
  //     id: 2,
  //     name: 'UTKARSH SINGH',
  //     imageSrc: 'src/components/images/utkarsh.jpeg', // Replace with actual image path
  //     description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
  //   },
  //   {
  //     id: 3,
  //     name: 'AKASH TRIPATHI',
  //     imageSrc: 'src/components/images/akash.jpeg', // Replace with actual image path
  //     description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
  //   },
  //   {
  //     id: 4,
  //     name: 'NISHANT KUMAR',
  //     imageSrc: 'src/components/images/nishant.jpeg', // Replace with actual image path
  //     description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
  //   },
  //   {
  //     id: 5,
  //     name: 'HIMANSHU RAI',
  //     imageSrc: 'src/components/images/himanshu.jpeg', // Replace with actual image path
  //     description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
  //   },
  //   {
  //     id: 6,
  //     name: 'SIDDHARTH SINGH',
  //     imageSrc: 'src/components/images/siddharth.jpeg', // Replace with actual image path
  //     description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
  //   },
    
  // ];

  const [directorsData, setDirectorsData] = useState([]);

  useEffect(() => {
    const imagelistref = ref(storage, 'board-members/'); // Replace with the correct storage path

    listAll(imagelistref)
      .then((response) => {
        const fetchDirectorsData = response.items.map((item) =>
          getDownloadURL(item).then((url) => ({
            image: url,
            description: getDirectorsDescription(item.name), // Fetch descriptions based on the item's name
            id: item.name, // Use a unique identifier, for example, the file name
          }))
        );

        Promise.all(fetchDirectorsData)
          .then((director) => {
            setDirectorsData(director);
          })
          .catch((error) => {
            console.error('Error fetching doctor profiles:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching image URLs:', error);
      });
  }, []);

  // Define a function to get descriptions based on the item's name
  const getDirectorsDescription = (name) => {
    // You can implement your logic to fetch descriptions here
    // For example, you can use a database or an array of descriptions
    // For now, we'll provide a simple example
    if (name === 'IMG-20230925-WA0011.jpg') {
      return 'tech';
    } else if (name === 'doctor2.jpg') {
      return 'Description for Doctor 2';
    }
    // Add more conditions for other doctors
    return 'Default description';
  };

  return (
    <BoardOfDirectorsWrapper>
      <Navbar />
      <CardContainer>
        {directorsData.map((director) => (
          <Card key={director.id}>
            <CardImage src={director.image} alt={director.name} />
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
