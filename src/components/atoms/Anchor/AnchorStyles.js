import styled from "styled-components";

export const StyledAnchor = styled.a`
  color: black;
  display: inline-block;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.8rem 1.2rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 10px 0;
  background-color: ${({ yellow, green, theme }) => {
    if (green) return `${theme.colors.green}`;
    if (yellow) return `${theme.colors.yellow};`;
    else return `white`;
  }};

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 0.8rem;
  }
`;
