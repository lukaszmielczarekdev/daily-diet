import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem 0;
    grid-template-columns: 40% 60%;
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

export const InnerContainer = styled.div`
  background: ${({ image }) => `url(${image}) center no-repeat`};
  background-size: contain;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "")};
  align-items: ${({ center }) => (center ? "center" : "")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
  }
`;
