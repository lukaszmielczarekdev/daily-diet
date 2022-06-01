import React from "react";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";
import { BsGear } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { useSelector } from "react-redux";

const NavBar = ({ handleLogout }) => {
  const { currentUser } = useSelector((state) => state.user.authData);

  return (
    <Container>
      <NavSection>
        <NavigationTitle>
          <NavigationLink href="/"> Daily Diet</NavigationLink>
        </NavigationTitle>
      </NavSection>
      <NavSection>
        {currentUser && (
          <NavigationLink href="diaries" weight={"Normal"} size={"1rem"}>
            Diaries
          </NavigationLink>
        )}
        {currentUser && (
          <NavigationLink href="profile" weight={"Normal"} size={"1rem"}>
            Profile
          </NavigationLink>
        )}
        {!currentUser ? (
          <NavigationLink href="/auth" weight={"Normal"} size={"1rem"}>
            Sign In
          </NavigationLink>
        ) : (
          <NavigationLink>
            <GrLogout onClick={() => handleLogout()} size={"1rem"} />
          </NavigationLink>
        )}
        {currentUser && (
          <NavigationLink href="preferences">
            <BsGear size={"1rem"} />
          </NavigationLink>
        )}
      </NavSection>
    </Container>
  );
};

export default NavBar;
