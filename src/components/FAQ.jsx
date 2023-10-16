import  { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const FAQContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px 0;
`;

const HeroSection = styled.section`
  background-image: url('src/components/images/DSC06815.JPG');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
`;

const FAQHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
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
  transform: rotae(${(props) =>(props.expanded ? '180deg' : '0deg')});
  cursor: pointer;
  font-size: 24px;
`;

const FAQ = () => {
  const [faqItems, setFAQItems] = useState([
    { question: 'How can we help?', answer: 'Answer 1', expanded: false },
    { question: 'Who are we?', answer: 'Answer 2', expanded: false },
    { question: 'How can we help?', answer: 'Answer 1', expanded: false },
    { question: 'Who are we?', answer: 'Answer 2', expanded: false },
    { question: 'How can we help?', answer: 'Answer 1', expanded: false },
    { question: 'Who are we?', answer: 'Answer 2', expanded: false },
  ]);

  const toggleFAQ = (index) => {
    const updatedFAQItems = [...faqItems];
    updatedFAQItems[index].expanded = !updatedFAQItems[index].expanded;
    setFAQItems(updatedFAQItems);
  };

  return (
    <FAQContainer>
      <Navbar />
      <HeroSection />
      <FAQHeading>FAQ</FAQHeading>
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
