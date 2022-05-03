import styled from "styled-components";

export const Wrapper = styled.article`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3rem 3rem 0 3rem;
  margin: 0;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column-reverse;
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
  max-width: 65%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
`;
