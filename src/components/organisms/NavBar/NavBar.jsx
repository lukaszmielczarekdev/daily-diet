import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth";
import { diariesRemoved } from "../../../store/userItems";
import { resetProfile } from "../../../store/userProfile";
import { BsGear } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import decode from "jwt-decode";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    dispatch(diariesRemoved());
    dispatch(resetProfile());
    setUser(null);
    history.push("/");
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.credential;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [handleLogout, location, user?.credential]);

  return (
    <Container>
      <NavSection>
        <NavigationTitle>
          <NavigationLink href="/"> Daily Diet</NavigationLink>
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
          <NavigationLink>
            <GrLogout onClick={() => handleLogout()} size={"1rem"} />
          </NavigationLink>
        )}
        {user && (
          <NavigationLink href="preferences">
            <BsGear size={"1rem"} />
          </NavigationLink>
        )}
      </NavSection>
    </Container>
  );
};

export default NavBar;
