import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const TitleSpan = styled.span`
  text-align: left;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
