import { useState } from "react";
import styled from "styled-components";
import headerLogo from "../images/logo-bookmark.svg";
import headerMenu from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import navFacebook from "../images/icon-facebook.svg";
import navTwitter from "../images/icon-twitter.svg";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HeaderContainer>
      {openNav && (
        <MobileNav>
          <MNavHeader>
            <NHeaderLogo src={headerLogo} alt="logo" />
            <NHeaderIcon
              src={closeIcon}
              alt="close"
              onClick={() => setOpenNav(false)}
            />
          </MNavHeader>
          <MNavBody>
            <NBodyItem>FEATURES</NBodyItem>
            <NBodyItem>PRICING</NBodyItem>
            <NBodyItem>CONTACT</NBodyItem>
            <NBodyButton>LOGIN</NBodyButton>
          </MNavBody>
          <MNavFooter>
            <NFooterIcon src={navFacebook} alt="facebook" />
            <NFooterIcon src={navTwitter} alt="twitter" />
          </MNavFooter>
        </MobileNav>
      )}
      <HeaderLeft>
        <LeftLogo src={headerLogo} alt="logo" />
      </HeaderLeft>
      <HeaderRight>
        <RightMenu
          src={headerMenu}
          alt="hamburger-menu"
          onClick={() => setOpenNav(true)}
        />
        <RightNav>
          <NavItem>FEATURES</NavItem>
          <NavItem>PRICING</NavItem>
          <NavItem>CONTACT</NavItem>
          <HeaderButton>LOGIN</HeaderButton>
        </RightNav>
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: var(--vdark-blue);

  @media (min-width: 1270px) {
    padding: 2rem 7rem;
  }
`;
const HeaderLeft = styled.div``;
const LeftLogo = styled.img``;
const HeaderRight = styled.div``;
const RightMenu = styled.img`
  @media (min-width: 850px) {
    display: none;
  }
`;
const RightNav = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const NavItem = styled.div`
  margin-right: 2rem;
  cursor: pointer;
`;
const HeaderButton = styled.button`
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  color: white;
  background-color: var(--soft-red);
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: all 0.6s;

  :hover {
    transform: scale(1.2);
  }
`;
const MobileNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--vdark-blue);
  z-index: 1000;
  opacity: 0.9;
  height: 100vh;
  padding: 2rem;
`;
const MNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--grayish-blue);
`;
const NHeaderLogo = styled.img`
  color: white;
`;
const NHeaderIcon = styled.img``;
const MNavBody = styled.div`
  color: white;
  text-align: center;
`;
const NBodyItem = styled.div`
  border-bottom: 1px solid var(--grayish-blue);
  padding: 1.5rem 0;
`;
const NBodyButton = styled.button`
  background-color: inherit;
  width: 100%;
  border: 2px solid white;
  padding: 0.5rem 0;
  color: white;
  cursor: pointer;
  letter-spacing: 0.1rem;
  font-family: "Rubik", san-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
`;
const MNavFooter = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  left: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
const NFooterIcon = styled.img``;

export default Header;
