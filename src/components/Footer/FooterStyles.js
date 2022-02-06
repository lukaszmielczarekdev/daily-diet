import styled from "styled-components";

// Footer Wrapper
export const FooterContainer = styled.section`
  max-width: 80%;
  padding: 2rem;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 2rem 0 0 0;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    padding: 0;
  }
`;

// Link list
export const ItemList = styled.ul`
  justify-items: center;
  border-top: 1px solid black;
  display: flex;
  padding: 3rem 0 1.5rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 2rem 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 2rempx 0 1rem;
    gap: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;
    padding: 1rem 0.25rem 1rem;
    gap: 5px;
  }
`;
