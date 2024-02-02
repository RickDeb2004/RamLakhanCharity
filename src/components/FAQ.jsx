// eslint-disable-next-line max-len
import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQContainer = styled.div`
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
  background-image: url("src/components/images/DSC06815.JPG");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;

  /* Adjustments for better responsiveness */
  @media (max-width: 600px) {
    padding: 80px 0;
  }
`;

const FAQItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const QuestionText = styled.div`
  flex: 1;
  font-weight: bold;
`;

const ExpandArrow = styled.div`
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.expanded ? "180deg" : "0deg")});
  cursor: pointer;
  font-size: 24px;
`;

const FAQ = () => {
  const [faqItems, setFAQItems] = useState([
    {
      question: "Who are we?",
      answer:
        " We are non government organisation and we provide help to needed one on national level",
      expanded: false,
    },
    {
      question: "What is our goal?",
      answer:
        "Our organisations strive to help the needy by procuring medical facilities free of cost. It aims at providing health facilities and proper medical comprehension in rural areas. We are putting efforts to augment people way of living by taking strides to eradicate poverty. We also take pride in working towards the refinement of Mother Earth. Our organisation conduct various environmental awareness programs and planting sessions where we plant more and more tree. We believe in selfless service and need your helping hand to continue working with the same zeal and enthusiasm.",
      expanded: false,
    },
    {
      question: "How can you participate ?",
      answer:
        "Our organisation frequently organises campaigns to join members who are interested in serving the society. One can directly contact at mentioned details to join our team",
      expanded: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFAQItems = [...faqItems];
    updatedFAQItems[index].expanded = !updatedFAQItems[index].expanded;
    setFAQItems(updatedFAQItems);
  };

  return (
    <FAQContainer>
      <Navbar />
      <HeroSection></HeroSection>
      {faqItems.map((item, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            <QuestionText>{item.question}</QuestionText>
            <ExpandArrow expanded={item.expanded}>
              <FontAwesomeIcon icon={faAngleUp} />
            </ExpandArrow>
          </FAQQuestion>
          {item.expanded && <p>{item.answer}</p>}
        </FAQItem>
      ))}
      <Footer />
    </FAQContainer>
  );
};

export default FAQ;
