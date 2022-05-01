import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const Span = styled.div`
  display: block;
`;

export const Icon = styled.div`
  width: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 1rem;
  }

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const Description = styled.span`
  text-align: left;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  line-height: 1.2;
  margin: 1rem;
  color: ${({ theme }) => theme.colors.semiTransparent};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`;
