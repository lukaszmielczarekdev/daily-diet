import React, { useState } from "react";
import {
  Container,
  NavLogo,
  NavLinks,
  NavAuth,
  NavHamburgerMenu,
  NavLinksHamburger,
  NavOverlay,
  CloseIcon,
} from "./NavBarStyles";
import { useSelector } from "react-redux";

import LinkItem from "../../molecules/LinkItem/LinkItem";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = ({ handleLogout }) => {
  const { currentUser } = useSelector((state) => state.user.authData);
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <Container>
      <NavLogo>
        <LinkItem
          to="/"
          margin={"0"}
          size={"1.2rem"}
          weight={"bold"}
          children={"Daily Diet"}
        />
      </NavLogo>
      <NavLinks>
        <LinkItem to="/" children={"Home"} />
        {currentUser && <LinkItem to="/diaries" children={"Inspirations"} />}
        {currentUser && <LinkItem to="/profile" children={"Profile"} />}
        {currentUser && <LinkItem to="/preferences" children={"Preferences"} />}
        <LinkItem to="/" children={"About"} />
      </NavLinks>
      <NavAuth>
        {!currentUser ? (
          <LinkItem
            add
            color={"white"}
            padding={"0.6rem"}
            radius={"10px 0"}
            to="/auth"
            children={"Sign In / Register"}
            size={"0.8rem"}
          />
        ) : (
          <LinkItem
            remove
            color={"white"}
            padding={"0.6rem"}
            radius={"10px 0"}
            to="/auth"
            onClick={() => handleLogout()}
            children={"Logout"}
            size={"0.8rem"}
          />
        )}
      </NavAuth>
      <NavHamburgerMenu mobile>
        <GiHamburgerMenu onClick={() => setMenuOpened(true)} size={"1.5rem"} />
        <NavOverlay isOpened={isMenuOpened}>
          <CloseIcon>
            <GrClose onClick={() => setMenuOpened(false)} size={"1.5rem"} />
          </CloseIcon>
          <NavLinksHamburger>
            <LinkItem
              to="/"
              onClick={() => setMenuOpened(false)}
              children={"Home"}
              margin={"1.8rem"}
              size={"1.5rem"}
            />
            {currentUser && (
              <LinkItem
                to="/diaries"
                onClick={() => setMenuOpened(false)}
                children={"Inspirations"}
                margin={"1.8rem"}
                size={"1.5rem"}
              />
            )}
            {currentUser && (
              <LinkItem
                to="/profile"
                onClick={() => setMenuOpened(false)}
                children={"Profile"}
                margin={"1.8rem"}
                size={"1.5rem"}
              />
            )}
            {currentUser && (
              <LinkItem
                to="/preferences"
                onClick={() => setMenuOpened(false)}
                children={"Preferences"}
                margin={"1.8rem"}
                size={"1.5rem"}
              />
            )}
            <LinkItem
              to="/"
              onClick={() => setMenuOpened(false)}
              children={"About"}
              margin={"1.8rem"}
              size={"1.5rem"}
            />
            {!currentUser ? (
              <LinkItem
                add
                color={"white"}
                padding={"0.6rem"}
                radius={"10px 0"}
                to="/auth"
                onClick={() => setMenuOpened(false)}
                children={"Sign In / Register"}
                margin={"2.5rem 2rem 0 2rem"}
                size={"1.2rem"}
              />
            ) : (
              <LinkItem
                remove
                color={"white"}
                padding={"0.6rem"}
                radius={"10px 0"}
                to="/"
                onClick={() => {
                  setMenuOpened(false);
                  handleLogout();
                }}
                children={"Logout"}
                margin={"2.5rem 2rem 0 2rem"}
                size={"1.2rem"}
              />
            )}
          </NavLinksHamburger>
        </NavOverlay>
      </NavHamburgerMenu>
    </Container>
  );
};

export default NavBar;
