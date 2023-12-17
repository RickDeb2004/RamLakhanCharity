import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firbase";
const DoctorProfileWrapper = styled.div`
  padding: 20px;
`;

const HeroSection = styled.section`
  background-image: url("src/components/images/DSC06815.JPG"); /* Replace with your hero image */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
`;

// const HeroText = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
// `;

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
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const DoctorImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
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
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const imagelistref = ref(storage, "doctors-profile/"); // Replace with the correct storage path

    listAll(imagelistref)
      .then((response) => {
        const fetchDoctorsData = response.items.map((item) =>
          getDownloadURL(item).then((url) => ({
            image: url,
            description: getDoctorDescription(item.name), // Fetch descriptions based on the item's name
            id: item.name, // Use a unique identifier, for example, the file name
          }))
        );

        Promise.all(fetchDoctorsData)
          .then((doctors) => {
            setDoctorsData(doctors);
          })
          .catch((error) => {
            console.error("Error fetching doctor profiles:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, []);

  const getDoctorDescription = (name) => {
    if (name === "IMG-20230925-WA0018.jpg") {
      return "Description for Doctor 1";
    } else if (name === "doctor2.jpg") {
      return "Description for Doctor 2";
    }

    return "Default description";
  };

  return (
    <DoctorProfileWrapper>
      <Navbar />
      <HeroSection></HeroSection>

      <DoctorCardsContainer>
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id}>
            <DoctorImage src={doctor.image} alt={`Dr. ${doctor.id}`} />
            <Description>{doctor.description}</Description>
            <ViewMoreLink to={`/doctor-profile/${doctor.id}`}>
              View More
            </ViewMoreLink>
          </DoctorCard>
        ))}
      </DoctorCardsContainer>
      <Footer />
    </DoctorProfileWrapper>
  );
};

export default DoctorProfile;
