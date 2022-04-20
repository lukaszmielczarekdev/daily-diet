import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const TitleSpan = styled.span`
  display: block;
  margin: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
