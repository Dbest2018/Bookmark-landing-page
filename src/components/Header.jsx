import React from "react";
import styled from "styled-components";
import headerLogo from "../images/logo-bookmark.svg";
import headerMenu from "../images/icon-hamburger.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <LeftLogo src={headerLogo} alt="logo" />
      </HeaderLeft>
      <HeaderRight>
        <RightMenu src={headerMenu} alt="hamburger-menu" />
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

export default Header;
