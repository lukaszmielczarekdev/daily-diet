import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth";
// import { BsGear } from "react-icons/bs";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // const token = user?.credential;

    //JWT... (manual sign up)
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.credential]);

  const handleLogout = () => {
    dispatch(logout());
    setUser(null);
    history.push("/");
  };

  return (
    <Container>
      <NavSection>
        <NavigationTitle>
          <NavigationLink href="/"> Daily Diet</NavigationLink>
          {user ? user.clientId : "Not logged"}
        </NavigationTitle>
      </NavSection>
      <NavSection>
        <NavigationLink href="diaries" weight={"Normal"} size={"1rem"}>
          Diaries
        </NavigationLink>
        {!user ? (
          <NavigationLink href="/auth" weight={"Normal"} size={"1rem"}>
            Sign In
          </NavigationLink>
        ) : (
          <Button remove onClick={() => handleLogout()}>
            Logout
          </Button>
        )}

        {/* <NavigationLink href="preferences" size={"1rem"}>
          <BsGear />
        </NavigationLink> */}
      </NavSection>
    </Container>
  );
};

export default NavBar;
