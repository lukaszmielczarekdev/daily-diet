import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${({ theme }) => theme.breakpoints.md} {
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
`;
