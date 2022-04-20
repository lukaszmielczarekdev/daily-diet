import React from "react";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";
import { BsGear } from "react-icons/bs";

const NavBar = () => {
  return (
    <Container>
      <NavSection>
        <NavigationTitle>
          <NavigationLink href="/">Daily Diet</NavigationLink>
        </NavigationTitle>
      </NavSection>
      <NavSection>
        <NavigationLink href="preferences">
          <BsGear />
        </NavigationLink>
      </NavSection>
    </Container>
  );
};

export default NavBar;
