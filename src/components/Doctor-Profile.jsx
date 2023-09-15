// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const DoctorProfileWrapper = styled.div`
  padding: 20px; 
`;

const HeroSection = styled.section`
  background-image: url('/path-to-hero-image.jpg'); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0; 
`;

const HeroText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const DoctorCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0; 
`;

const DoctorCard = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const DoctorImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.p`
  font-weight: bold;
`;

const ViewMoreLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
`;

const DoctorProfile = () => {
 
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      image: '/path-to-doctor-image-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      image: '/path-to-doctor-image-2.jpg',
      description: 'Sed tristique urna eu libero fringilla, eget suscipit libero vehicula.',
    },
   
  ];

  return (
    <DoctorProfileWrapper>
      <Navbar />
      <HeroSection>
        <HeroText>
          <h1>Doctor Profiles</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </HeroText>
      </HeroSection>

      <DoctorCardsContainer>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id}>
            <DoctorImage src={doctor.image} alt={doctor.name} />
            <Description>{doctor.description}</Description>
            <ViewMoreLink to={`/doctor-profile/${doctor.id}`}>View More</ViewMoreLink>
          </DoctorCard>
        ))}
      </DoctorCardsContainer>
      <Footer />
    </DoctorProfileWrapper>
  );
};

export default DoctorProfile;
