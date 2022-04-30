import styled from "styled-components";

export const Wrapper = styled.article`
  display: ${({ flex }) => (flex ? "flex" : "grid")};
  text-align: left;
  grid-template-columns: ${({ columns }) => (columns ? columns : "1fr 1fr")};
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  padding: 1rem 2rem;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 1rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
  }
`;
