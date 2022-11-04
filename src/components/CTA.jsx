import React from "react";
import styled from "styled-components";

const CTA = () => {
  return (
    <CTAContainer>
      <CTAText>35,000+ already joined</CTAText>
      <CTATitle>Stay up-to-date with what we’re doing</CTATitle>
      <CTAForm>
        <CTAInput placeholder="Enter your email address" />
        <CTAButton>Contact Us</CTAButton>
      </CTAForm>
    </CTAContainer>
  );
};

const CTAContainer = styled.div`
  background-color: var(--soft-blue);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTAText = styled.div`
  color: whitesmoke;
  letter-spacing: 0.2rem;
`;
const CTATitle = styled.div`
  max-width: 350px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 500;
`;

const CTAForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTAInput = styled.input`
  outline: none;
  border: none;
  padding: 1rem;
  margin: 1rem 0;
  font-family: "Rubik", san-serif;
  border-radius: 0.25rem;

  ::placeholder {
    color: var(--grayish-blue);
  }
`;
const CTAButton = styled.button`
  color: white;
  background-color: var(--soft-red);
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  font-family: "Rubik", san-serif;
`;

export default CTA;
