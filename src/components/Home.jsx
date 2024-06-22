/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileHome from "./MobileHome";

const HomeContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  background: linear-gradient(135deg, #fffdd0, #faf9f6);
`;

const HeroSection = styled.section`
  flex: 1; /* Let the HeroSection grow to fill available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* Adjust the padding as needed */
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
  /* Adjust the width as needed */
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Maintain aspect ratio and cover container */
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
`;

const CircleCard = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* Responsive styles for small screens (phones) */
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const CircleImage = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #333; /* Add a border around the circle */
  margin: 0 auto;
`;

const Heading2 = styled.h2`
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-weight: 400;
`;

const AdditionalContentBottom = styled.div`
  margin-top: 50px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  flex: 30%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: linear-gradient(135deg, #6a1b9a, #fff3e0);
  margin-left: 20px;
`;

const ContactHeading = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContactContent = styled.p`
  font-weight: 400;
`;

const VideoCard = styled.div`
  flex: 30%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: linear-gradient(135deg, #ecd06f, #fff3e0);
  margin-left: 20px;
`;

const Home = () => {
  const isMobileView = window.innerWidth < 600;

  return (
    <HomeContainer>
      {isMobileView ? (
        <MobileHome />
      ) : (
        <>
          <Navbar />
          <HeroSection>
            <CarouselContainer>
              <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showThumbs={false}
                interval={3000}
              >
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872104/C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034_awetvo.jpg"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872456/IMG_5058_nv3e5d.jpg"
                    alt="Image 2"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103756/IMG_5066_jzx52z.jpg"
                    alt="Image 3"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103861/IMG_5068_ukkr79.jpg"
                    alt="Image 4"
                  />
                </div>
                <div>
                  <CarouselImage
                    src="https://res.cloudinary.com/dkkuaymml/image/upload/v1715872104/C46B9FDC-A2EE-4CF8-9FD5-6D875E8E3034_awetvo.jpg"
                    alt="Image 5"
                  />
                </div>
              </Carousel>
            </CarouselContainer>
          </HeroSection>

          <ContentSection>
            <Heading2>Welcome to Our Website</Heading2>
            <Paragraph>
              Enter a realm of compassionate care, where healthcare transforms
              lives and nurtures wellbeing.
            </Paragraph>
          </ContentSection>

          <CircleCard>
            <CircleImage
              src="https://res.cloudinary.com/dkkuaymml/image/upload/v1716103911/guruji_tyijeq.jpg"
              alt="Guru Kripa"
            />
          </CircleCard>

          <AdditionalContentBottom>
            <div style={{ flex: 70 }}>
              <h3>
                Welcome to Maya CARE Foundation – The next best thing to family.
              </h3>
              <p>
                Maya CARE Foundation, a charitable organization founded in 2009,
                dedicated to empowering the most marginalized sections of
                society – Persons with Disabilities (PWDs) and the elderly. Our
                unique approach revolves around empowering one section to help
                the other, fostering a sense of community and support.
              </p>
              <p>
                Our journey began 13 years ago with a mission to provide free
                assistance to the elderly, and this initiative is entirely
                managed by professionals who have triumphed over disabilities.
                Through the dedication of our passionate team, we have offered
                20,872 free visits, providing essential medical, emotional, and
                logistical support to the elderly across 4 cities in the UK and
                72 cities in India.
              </p>
              <p>
                At Maya CARE Foundation, we take immense pride in our commitment
                to nurturing leaders who have overcome various disabilities. Our
                organization has played a pivotal role in assisting over a
                thousand disabled individuals in finding career direction and
                achieving personal growth.
              </p>
              <p>
                As we continue our impactful journey, we aim to extend our reach
                further and create a profound positive impact on the lives of
                those in need. Join us in making a difference and building a
                more inclusive and compassionate society for all.
              </p>
              <p>Maya CARE services are offered FREE of charge.</p>

              <h3>
                How Maya CARE Foundation Works: Empowering Lives with Diversity
              </h3>
              <p>
                Maya CARE Foundation, where we embrace challenges and turn them
                into opportunities to serve the elderly with the help of our
                unique team, Project BINDU, comprising Persons with Disabilities
                (PwDs). Together, we have three complementary teams, each with
                varying abilities, making a meaningful difference:
              </p>
              <ul>
                <li>
                  The Voice Team: Our visually impaired professionals skillfully
                  connect with and assist those in need through voice notes
                  during calls.
                </li>
                <li>
                  The Data Team: Our hearing-impaired members effectively
                  communicate through "silent" chat with subtitles, ensuring
                  seamless interactions.
                </li>
                <li>
                  The Power Team: Led by individuals with locomotor or neuro
                  disabilities, they spearhead our efforts and drive positive
                  change.
                </li>
              </ul>
              <p>
                Empowering PwDs facing socio-economic challenges, we harness
                technology to offer remote, flexible opportunities with a "pay
                per hour" approach through data-driven strategies. Thanks to
                Salesforce, our operations run efficiently, providing
                personalized services across 72 Indian cities.
              </p>
              <p>
                Accessibility is vital to us, so we equip our team with laptops,
                routers, and smartphones, enabling seamless communication
                through platforms like WhatsApp and Google Drive.
              </p>
              <p>
                Maya CARE Foundation is dedicated to celebrating diversity and
                empowering every individual to make a meaningful impact. Join
                our journey of compassion and inclusivity as we work together to
                empower lives and foster a strong sense of community and
                support. Together, we can create a more inclusive society that
                values and embraces the strengths of each person.
              </p>
            </div>
            <div style={{ flex: 30, display: "flex", flexDirection: "column" }}>
              <InfoCard>
                <ContactHeading>Serving the elderly</ContactHeading>
                <ContactContent>
                  Free services to the elderly in every city of India and to the
                  world with operations managed by PWDs in every spoken language
                  of the world.
                </ContactContent>
              </InfoCard>
              <InfoCard style={{ marginTop: "20px" }}>
                <ContactHeading>Project Bindu</ContactHeading>
                <ContactContent>
                  Enable PWDs to become economically independent while leading a
                  professional organisation.
                </ContactContent>
              </InfoCard>
              <VideoCard style={{ marginTop: "20px" }}>
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoCard>
            </div>
          </AdditionalContentBottom>

          <Footer />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
