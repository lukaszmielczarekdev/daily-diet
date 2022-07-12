import React, { useState } from "react";
import {
  Container,
  NavLogo,
  Logo,
  NavLinks,
  NavAuth,
  NavHamburgerMenu,
  NavLinksHamburger,
  NavOverlay,
  CloseIcon,
} from "./NavBarStyles";
import { useSelector } from "react-redux";
import logo from "../../../assets/Images/website_logo.png";
import LinkItem from "../../molecules/LinkItem/LinkItem";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = ({ handleLogout }) => {
  const { currentUser } = useSelector((state) => state.user.authData);
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <Container>
      <NavLogo>
        <Logo src={logo} alt={"website logo"} />
        <LinkItem
          to="/"
          margin={"0.5rem"}
          size={"1.2rem"}
          weight={"bold"}
          children={"Daily Diet"}
        />
      </NavLogo>
      <NavLinks>
        <LinkItem to="/" children={"Home"} />
        {currentUser && <LinkItem to="/diaries" children={"Inspirations"} />}
        {currentUser && (
          <LinkItem
            to="/builder"
            children={"Creator"}
            color={"rgb(125, 215, 120)"}
          />
        )}
        <LinkItem to="/" children={"About"} />
      </NavLinks>
      <NavAuth>
        {currentUser && <LinkItem to="/profile" children={"Profile"} />}
        {!currentUser ? (
          <LinkItem
            add={1}
            color={"white"}
            padding={"0.6rem"}
            radius={"10px 0"}
            to="/auth"
            children={"Sign In / Register"}
            size={"0.8rem"}
          />
        ) : (
          <LinkItem
            remove={1}
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
              margin={"1.6rem"}
              size={"1.2rem"}
            />
            {currentUser && (
              <LinkItem
                to="/diaries"
                onClick={() => setMenuOpened(false)}
                children={"Inspirations"}
                margin={"1.6rem"}
                size={"1.2rem"}
              />
            )}
            {currentUser && (
              <LinkItem
                to="/builder"
                children={"Creator"}
                onClick={() => setMenuOpened(false)}
                color={"rgb(125, 215, 120)"}
                margin={"1.6rem"}
                size={"1.2rem"}
              />
            )}
            <LinkItem
              to="/"
              onClick={() => setMenuOpened(false)}
              children={"About"}
              margin={"1.6rem"}
              size={"1.2rem"}
            />
            {currentUser && (
              <LinkItem
                to="/profile"
                onClick={() => setMenuOpened(false)}
                children={"Profile"}
                margin={"2.5rem 1.6rem 0 1.6rem"}
                size={"1.2rem"}
              />
            )}
            {!currentUser ? (
              <LinkItem
                add={1}
                color={"white"}
                padding={"0.6rem"}
                radius={"10px 0"}
                to="/auth"
                onClick={() => setMenuOpened(false)}
                children={"Sign In / Register"}
                margin={"1.6rem"}
                size={"1rem"}
              />
            ) : (
              <LinkItem
                remove={1}
                color={"white"}
                padding={"0.6rem"}
                radius={"10px 0"}
                to="/"
                onClick={() => {
                  setMenuOpened(false);
                  handleLogout();
                }}
                children={"Logout"}
                margin={"1.6rem"}
                size={"1rem"}
              />
            )}
          </NavLinksHamburger>
        </NavOverlay>
      </NavHamburgerMenu>
    </Container>
  );
};

export default NavBar;
