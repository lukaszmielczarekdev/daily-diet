import styled from "styled-components";

export const StyledTitle = styled.h3`
  color: ${({ color }) => (color ? `${color}` : "white")};
  font-size: 2rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  position: absolute;
  bottom: 16px;
  left: ${({ left }) => (left ? "32px" : "")};
  right: ${({ right }) => (right ? "32px" : "")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.6rem;
  }
`;

export const TitleSpan = styled.span`
  white-space: pre-line;
  text-align: ${({ right }) => (right ? "right" : "left")};
  font-weight: normal;
  color: ${({ color }) => (color ? `${color}` : "white")};
  display: block;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.6rem;
  }
`;
