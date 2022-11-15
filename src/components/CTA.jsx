import { useState } from "react";
import styled from "styled-components";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <CTAContainer>
      <CTAText>35,000+ already joined</CTAText>
      <CTATitle>Stay up-to-date with what we’re doing</CTATitle>
      <CTAForm onSubmit={handleSubmit}>
        <CTAInput
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email ? email : ""}
        />
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
  font-size: 1.75rem;
  margin: 1rem 0;
`;

const CTAForm = styled.form`
  width: 100%;
  display: flex;
  max-width: 400px;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-direction: row;
    align-items: center;
  }
`;
const CTAInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  padding: 1rem;
  margin: 1rem 0;
  color: var(--vdark-blue);
  font-family: "Rubik", san-serif;
  border-radius: 0.25rem;

  ::placeholder {
    color: var(--grayish-blue);
  }
`;
const CTAButton = styled.button`
  height: fit-content;
  color: white;
  background-color: var(--soft-red);
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  font-family: "Rubik", san-serif;

  @media (min-width: 550px) {
    margin-left: 1rem;
  }
`;

export default CTA;
