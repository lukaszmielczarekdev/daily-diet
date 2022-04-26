import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Span = styled.div`
  display: block;
`;

export const Icon = styled.div`
  width: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 1rem;
  }
`;

export const Description = styled.p`
  text-align: left;
  letter-spacing: 0.5px;
  font-size: 1rem;
  line-height: 1.2;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.semiTransparent};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`;
