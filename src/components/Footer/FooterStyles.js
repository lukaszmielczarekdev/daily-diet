import styled from "styled-components";

// Footer Wrapper
export const FooterContainer = styled.section`
  border-top: 1px solid black;
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
