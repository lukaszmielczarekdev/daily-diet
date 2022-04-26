import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? `${width}` : "fit-content")};
  display: ${({ block }) => (block ? "block" : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 10px 0;
  text-align: center;
  color: ${({ color }) => (color ? `${color}` : "white")};
  border: ${({ border }) => (border ? `${border}` : "none")};
  border-radius: 10px 0;
  cursor: pointer;
  background-color: ${({ remove, add, save, theme }) => {
    if (remove) return `${theme.colors.warning}`;
    if (add) return `${theme.colors.green}`;
    if (save) return `${theme.colors.yellow};`;
    else return `transparent`;
  }};

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ width }) => (width ? `${width}` : "100%")};
  }
`;
