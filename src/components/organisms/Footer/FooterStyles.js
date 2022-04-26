import styled from "styled-components";

// Footer Wrapper
export const FooterContainer = styled.section`
  padding: 2rem;
  box-sizing: content-box;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  justify-content: center;
  min-height: 50vh;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 2rem 0 0 0;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 0;
  }
`;
