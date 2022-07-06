import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0 0.5rem")};
  text-align: center;
  width: fit-content;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: ${({ margin }) => (margin ? margin : "0 1rem")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    margin: ${({ margin }) => (margin ? margin : "0 1rem")};
  }
`;

export const NavigationLink = styled(NavLink)`
  color: ${({ color, theme }) => (color ? color : theme.colors.dark)};
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  margin: ${({ margin }) => (margin ? margin : "0.5rem")};

  border: ${({ border }) => (border ? `${border}` : "none")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  border-radius: ${({ radius }) => (radius ? radius : "")};

  background-color: ${({ remove, add, save, edit, theme }) => {
    if (remove) return `${theme.colors.warning}`;
    if (add) return `${theme.colors.green}`;
    if (save) return `${theme.colors.yellow};`;
    if (edit) return `${theme.colors.lightBlue};`;
    else return `transparent`;
  }};

  &:hover {
    transition: 0.3s ease;
    color: ${({ color, theme }) => (color ? color : theme.colors.green)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.green};
    cursor: pointer;
  }
`;
