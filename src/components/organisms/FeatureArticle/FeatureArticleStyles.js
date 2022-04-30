import styled from "styled-components";

export const Wrapper = styled.article`
  display: ${({ flex }) => (flex ? "flex" : "grid")};
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem 0;
    grid-template-columns: 60% 40%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const Description = styled.p`
  text-align: left;
  letter-spacing: 0.6px;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.semiTransparent};
`;

export const Container = styled.div`
  padding: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
`;
