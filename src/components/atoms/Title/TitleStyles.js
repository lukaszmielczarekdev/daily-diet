import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0 1.5rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const TitleSpan = styled.span`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
