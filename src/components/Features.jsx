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

const FeaturesHeader = styled.div``;
const FHeaderTitle = styled.div``;
const FHeaderText = styled.div``;

const FeaturesMain = styled.div``;
const FMainHeader = styled.div``;
const FMHeaderItem = styled.div``;
const FMainBody = styled.div``;
const FMBodyLeft = styled.div``;
const FeaturesImage = styled.img``;
const FMBodyRight = styled.div``;
const FRightText = styled.div``;
const FRightTitle = styled.div``;
const FRightButton = styled.button``;

export default Features;
