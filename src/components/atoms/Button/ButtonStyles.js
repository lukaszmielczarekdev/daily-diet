import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? `${width}` : "fit-content")};
  display: ${({ block }) => (block ? "block" : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  color: white;
  border: none;
  background-color: ${({ remove, add, save }) => {
    if (remove)
      return `
            rgb(235,110,105);
        `;
    if (add)
      return `
            yellowgreen;
        `;
    if (save)
      return `
            rgb(45,100,245);
        `;
  }};
  border-radius: 10px;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
