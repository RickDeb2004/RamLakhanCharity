// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firbase";

const ContactWrapper = styled.div`
  background: linear-gradient(135deg, #fffdd0, #faf9f6);
`;

const HeroSection = styled.section`
  background-image: url("src/components/images/DSC06815.JPG"); /* Replace with your background image path */
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
  background: linear-gradient(-135deg, #f9efaf, #f7a73e);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: linear-gradient(-135deg, #f9efaf, #f7a73e);
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ecd06f, #ffa500);
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
      });

      console.log("Document written with ID: ", docRef.id);

      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <ContactWrapper>
      <Navbar />
      <HeroSection>
        <h1>Contact Us</h1>
        <p> We love to hear from you!</p>
      </HeroSection>

      <FormSection>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <Label>Contact Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label>Subject</Label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label>Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></TextArea>
          </FormField>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </FormSection>
      <Footer />
    </ContactWrapper>
  );
};

export default Contact;
