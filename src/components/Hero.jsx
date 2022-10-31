import React from "react";
import styled from "styled-components";
import heroImage from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroTitle>A Simple Bookmark Manager</HeroTitle>
        <HeroText>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </HeroText>
        <HeroChrome>Get it on Chrome</HeroChrome>
        <HeroFireFox>Get it on FireFox</HeroFireFox>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={heroImage} alt="hero" />
        <RightBanner></RightBanner>
      </HeroRight>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-left: 2rem;
  margin: 2rem 0;
`;

const HeroLeft = styled.div`
  margin: 2rem 2rem 2rem 0;
`;
const HeroTitle = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 500;
  color: var(--vdark-blue);
  text-align: center;
`;
const HeroText = styled.div`
  margin: 1rem 0 2rem;
  color: var(--grayish-blue);
  text-align: center;
  line-height: 1.5;
`;
const HeroChrome = styled.button`
  font-family: "Rubik", san-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background-color: var(--soft-blue);
  color: white;
  margin-right: 1.5rem;
`;
const HeroFireFox = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  color: var(--vdark-blue);
  font-family: "Rubik", san-serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const HeroRight = styled.div``;
const HeroImage = styled.img`
  width: 95%;
  margin-bottom: -12rem;
`;
const RightBanner = styled.div`
  width: 80%;
  margin-left: 4.4rem;
  padding: 6rem;
  border-bottom-left-radius: 6rem;
  background-color: var(--soft-blue);
`;

export default Hero;
