import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 3rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

// export as a atom
export const Description = styled.p`
  padding: 1rem;
`;
