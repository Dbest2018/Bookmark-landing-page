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

  @media (min-width: 700px) {
    flex-direction: row;
  }
  @media (min-width: 1270px) {
    padding-left: 7rem;
  }
`;

const HeroLeft = styled.div`
  margin: 2rem 2rem 2rem 0;
  flex: 1;
  text-align: center;

  @media (min-width: 700px) {
    text-align: left;
  }
  @media (min-width: 1270px) {
    margin-top: 4rem;
  }
`;
const HeroTitle = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 500;
  color: var(--vdark-blue);

  @media (min-width: 1270px) {
    font-size: 3rem;
  }
`;
const HeroText = styled.div`
  margin: 1rem 0 2rem;
  max-width: 500px;
  color: var(--grayish-blue);
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
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: all 0.6s;

  :hover {
    transform: scale(1.2);
  }
`;
const HeroFireFox = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  color: var(--vdark-blue);
  font-family: "Rubik", san-serif;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: all 0.6s;

  :hover {
    transform: scale(1.2);
  }
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const HeroImage = styled.img`
  width: 95%;
  margin-bottom: -12rem;
`;
const RightBanner = styled.div`
  width: 80%;
  height: 200px;
  z-index: -1;
  align-self: flex-end;
  background-color: var(--soft-blue);
  border-radius: 500px 0 0 500px;

  @media (min-width: 1270px) {
    height: 300px;
    margin-top: -6rem;
  }
`;

export default Hero;
