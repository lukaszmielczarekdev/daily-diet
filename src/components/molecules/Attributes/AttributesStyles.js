import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 0.5rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: space-between;
  display: ${({ smallScreen }) => (smallScreen ? "none" : "flex")};
  width: ${({ smallScreen }) => (smallScreen ? "0" : "80%")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: ${({ smallScreen }) => (smallScreen ? "flex" : "none")};
    width: ${({ smallScreen }) => (smallScreen ? "100%" : "0")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
