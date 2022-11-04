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
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const FooterLeft = styled.div`
  text-align: center;
`;
const FLeftLogo = styled.img`
  color: white;
`;
const FLeftNav = styled.div`
  margin: 2rem 0;
`;
const FLNavItem = styled.div`
  margin-bottom: 1rem;
  color: var(--grayish-blue);
  letter-spacing: 0.1rem;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const FRightIcon = styled.img`
  color: white;
`;

export default Footer;
