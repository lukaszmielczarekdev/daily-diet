import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: black;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem;
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
