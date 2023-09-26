// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactWrapper = styled.div`
  background-color: #f7f7f7;
  background-image:url('src/components/images/hmn11.jpg')
`;

const HeroSection = styled.section`
  background-image: url('src/components/images/DSC06815.JPG'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  color: grey;
  text-align: center;
  padding: 100px 0; /* Adjust the padding as needed */
`;

const FormSection = styled.section`
  padding: 50px 0; /* Adjust the padding as needed */
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Navbar />
      <HeroSection>
        <h1>Contact Us</h1>
        <p> We love to hear from you!</p>
      </HeroSection>

      <FormSection>
        <ContactForm>
          <FormField>
            <Label>Contact Name</Label>
            <Input type="text" name="name" />
          </FormField>
          <FormField>
            <Label>Email</Label>
            <Input type="email" name="email" />
          </FormField>
          <FormField>
            <Label>Subject</Label>
            <Input type="text" name="subject" />
          </FormField>
          <FormField>
            <Label>Phone Number</Label>
            <Input type="tel" name="phone" />
          </FormField>
          <FormField>
            <Label>Message</Label>
            <TextArea name="message"></TextArea>
          </FormField>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </FormSection>
        <Footer />
    </ContactWrapper>
  );
};

export default Contact;
