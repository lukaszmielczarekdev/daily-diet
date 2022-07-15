import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const StyledLink = styled(NavLink)`
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  border-radius: 10px 0;
  width: fit-content;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  background-color: ${({ color, theme }) => {
    if (color === "red") return `${theme.colors.warning}`;
    if (color === "green") return `${theme.colors.green}`;
    if (color === "yellow") return `${theme.colors.yellow};`;
    else return `white`;
  }};
`;

export const StyledHashLink = styled(NavHashLink)`
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  border-radius: 10px 0;
  width: fit-content;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  background-color: ${({ color, theme }) => {
    if (color === "red") return `${theme.colors.warning}`;
    if (color === "green") return `${theme.colors.green}`;
    if (color === "yellow") return `${theme.colors.yellow};`;
    else return `white`;
  }};
`;
