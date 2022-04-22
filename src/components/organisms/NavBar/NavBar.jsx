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
        <NavigationLink href="diaries" weight={"Normal"} size={"1rem"}>
          Diaries
        </NavigationLink>
        <NavigationLink href="profile" weight={"Normal"} size={"1rem"}>
          Profile
        </NavigationLink>
        <NavigationLink href="preferences" size={"1rem"}>
          <BsGear />
        </NavigationLink>
      </NavSection>
    </Container>
  );
};

export default NavBar;
