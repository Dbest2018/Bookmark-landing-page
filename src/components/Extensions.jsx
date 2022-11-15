import React from "react";
import styled from "styled-components";
import googleLogo from "../images/logo-chrome.svg";
import firefoxLogo from "../images/logo-firefox.svg";
import operaLogo from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";

const Extensions = () => {
  return (
    <ExtensionsContainer>
      <ExtensionsHeader>
        <EHeaderTitle>Download the extension</EHeaderTitle>
        <EHeaderText>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </EHeaderText>
      </ExtensionsHeader>

      <ExtensionBody>
        <Extension>
          <ExtensionLogo src={googleLogo} alt="google" />
          <ExtensionTitle>Add to Chrome</ExtensionTitle>
          <ExtensionText>Minimum version 62</ExtensionText>
          <ExtensionDots src={dots} alt="dots" />
          <ExtensionButton>Add & Install Extension</ExtensionButton>
        </Extension>
        <Extension>
          <ExtensionLogo src={firefoxLogo} alt="firefox" />
          <ExtensionTitle>Add to Firefox</ExtensionTitle>
          <ExtensionText>Minimum version 55</ExtensionText>
          <ExtensionDots src={dots} alt="dots" />
          <ExtensionButton>Add & Install Extension</ExtensionButton>
        </Extension>
        <Extension>
          <ExtensionLogo src={operaLogo} alt="opera" />
          <ExtensionTitle>Add to Opera</ExtensionTitle>
          <ExtensionText> Minimum version 46</ExtensionText>
          <ExtensionDots src={dots} alt="dots" />
          <ExtensionButton>Add & Install Extension</ExtensionButton>
        </Extension>
      </ExtensionBody>
    </ExtensionsContainer>
  );
};

const ExtensionsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ExtensionsHeader = styled.div`
  max-width: 550px;
  margin: 2rem 0;
  text-align: center;
`;
const EHeaderTitle = styled.div`
  margin: 1rem 0;
  color: var(--vdark-blue);
  font-size: 1.75rem;
  font-weight: 500;
`;
const EHeaderText = styled.div`
  color: var(--grayish-blue);
  line-height: 1.5;
`;

const ExtensionBody = styled.div`
  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    section:nth-child(2) {
      margin-top: 4rem;
    }
    section:nth-child(3) {
      margin-top: 6rem;
    }
  }
`;

const Extension = styled.section`
  flex: 1;
  width: 100%;
  max-width: 300px;
  height: 360px;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 10px 10px 0px rgba(0, 0, 0, 0.1),
    -2px 0px 3px 0px rgba(0, 0, 0, 0.1);

  text-align: center;

  @media (min-width: 850px) {
    margin-right: 2rem;
  }
`;
const ExtensionLogo = styled.img`
  margin: 1rem 0;
`;
const ExtensionTitle = styled.div`
  color: var(--vdark-blue);
  font-weight: 500;
`;
const ExtensionText = styled.div`
  color: var(--grayish-blue);
  margin: 1rem 0;
`;
const ExtensionDots = styled.img`
  margin: 1rem 0;
  width: 100%;
`;
const ExtensionButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-family: "Rubik", san-serif;
  color: white;
  cursor: pointer;
  background-color: var(--soft-blue);
  border: none;
  border-radius: 0.3rem;

  :hover {
    color: var(--soft-blue);
    background-color: white;
    border: 1px solid var(--soft-blue);
  }
`;

export default Extensions;
