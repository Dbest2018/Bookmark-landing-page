import React from "react";
import styled from "styled-components";
import footerLogo from "../images/logo-bookmark.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FLeftLogo src={footerLogo} alt="footer" />
        <FLeftNav>
          <FLNavItem>FEATURES</FLNavItem>
          <FLNavItem>PRICING</FLNavItem>
          <FLNavItem>CONTACT</FLNavItem>
        </FLeftNav>
      </FooterLeft>
      <FooterRight>
        <FRightIcon src={facebook} alt="facebook" />
        <FRightIcon src={twitter} alt="twitter" />
      </FooterRight>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: var(--vdark-blue);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1270px) {
    padding: 2rem 7rem;
  }
`;
const FooterLeft = styled.div`
  text-align: center;
  @media (min-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const FLeftLogo = styled.img`
  filter: invert(1);
`;
const FLeftNav = styled.div`
  margin: 2rem 0;

  @media (min-width: 750px) {
    margin: 0 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
const FLNavItem = styled.div`
  margin-bottom: 1rem;
  color: var(--grayish-blue);
  letter-spacing: 0.1rem;
  cursor: pointer;
  :hover {
    color: var(--soft-red);
  }

  @media (min-width: 750px) {
    margin: 0;
  }
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const FRightIcon = styled.img`
  color: white;
  cursor: pointer;
`;

export default Footer;
