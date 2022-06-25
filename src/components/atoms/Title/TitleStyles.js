import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: ${({ small }) => (small ? "2rem" : "3rem")};
  font-weight: normal;
  text-align: ${({ text }) => (text ? text : "left")};
  letter-spacing: 1px;
  line-height: 1.3;
  margin: ${({ margin }) => (margin ? margin : "1rem 0 1.5rem 0")};
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ small }) => (small ? "1.7rem" : "2rem")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ small }) => (small ? "1.2rem" : "1.5rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ small }) => (small ? "1.2rem" : "1.5rem")};
  }
`;

export const TitleSpan = styled.span`
  white-space: pre-line;
  text-align: ${({ text }) => (text ? text : "left")};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: ${({ small }) => (small ? "0.8rem" : "1rem")};
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
