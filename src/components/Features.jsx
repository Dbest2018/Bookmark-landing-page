import React from "react";
import styled from "styled-components";
import featuresImage from "../images/illustration-features-tab-1.svg";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesHeader>
        <FHeaderTitle>Features</FHeaderTitle>
        <FHeaderText>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </FHeaderText>
      </FeaturesHeader>
      <FeaturesMain>
        <FMainHeader>
          <FMHeaderItem>Simple Bookmarking</FMHeaderItem>
          <FMHeaderItem>Speedy Searching</FMHeaderItem>
          <FMHeaderItem> Easy Sharing</FMHeaderItem>
        </FMainHeader>
        <FMainBody>
          <FMBodyLeft>
            <FeaturesImage src={featuresImage} alt="features" />
            <FeaturesBanner />
          </FMBodyLeft>
          <FMBodyRight>
            <FRightTitle>Bookmark in one click</FRightTitle>
            <FRightText>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </FRightText>
            <FRightButton>More info</FRightButton>
          </FMBodyRight>
        </FMainBody>
      </FeaturesMain>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.div``;

const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 2rem;
`;
const FHeaderTitle = styled.div`
  color: var(--vdark-blue);
  font-size: 1.75rem;
  font-weight: 500;
  margin: 1rem;
`;
const FHeaderText = styled.div`
  color: var(--grayish-blue);
  line-height: 1.5;
  text-align: center;
  max-width: 550px;
`;

const FeaturesMain = styled.div``;
const FMainHeader = styled.div`
  border-bottom: 1px solid var(--grayish-blue);
  margin: 0rem 2rem 3rem;
  max-width: 700px;

  @media (min-width: 550px) {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem auto 3rem;
  }
`;
const FMHeaderItem = styled.div`
  cursor: pointer;
  border-top: 1px solid var(--grayish-blue);
  padding: 1rem 0;
  text-align: center;
  color: var(--grayish-blue);
  font-weight: 500;

  :active,
  :hover {
    color: var(--vdark-blue);
    border-bottom: 3px solid var(--soft-red);
  }

  @media (min-width: 550px) {
    border-top: none;
  }
`;

const FMainBody = styled.div`
  @media (min-width: 750px) {
    display: flex;
  }
`;
const FMBodyLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
const FeaturesImage = styled.img`
  width: 100%;
  align-self: flex-start;
  padding: 0 2rem;
  margin-bottom: -11.5rem;

  @media (min-width: 1270px) {
    padding-left: 7rem;
  }
`;
const FeaturesBanner = styled.div`
  width: 80%;
  height: 220px;
  align-self: flex-start;
  z-index: -1;
  border-radius: 0px 500px 500px 0px;
  background-color: var(--soft-blue);

  @media (min-width: 1270px) {
    height: 300px;
    margin-top: -3rem;
  }
`;

const FMBodyRight = styled.div`
  flex: 1;
`;
const FRightText = styled.div``;
const FRightTitle = styled.div``;
const FRightButton = styled.button``;

export default Features;
