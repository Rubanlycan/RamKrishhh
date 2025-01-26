import React from "react";
import { HeaderWrapper, LeftHeader, Logo, Nav, NavItem, NavLink, NavList, TextWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftHeader>
        <Logo src={require("../../assets/logo.png")} alt="logo" />
        <TextWrapper>Krishhh Music</TextWrapper>
      </LeftHeader>
      <div style={{width:'36%'}}>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sample">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
