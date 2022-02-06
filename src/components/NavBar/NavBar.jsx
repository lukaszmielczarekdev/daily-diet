import React from "react";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";

const NavBar = () => {
  return (
    <Container>
      <NavSection>
        <NavigationTitle>LOGO</NavigationTitle>
      </NavSection>
      <NavSection>
        <NavigationLink href="#diarybuilder">Build a diary</NavigationLink>
        <NavigationLink href="#about">About</NavigationLink>
      </NavSection>
    </Container>
  );
};

export default NavBar;
