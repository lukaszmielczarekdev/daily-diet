import styled from "styled-components";

export const Wrapper = styled.article`
  max-width: 1280px;
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
  justify-content: space-between;
  padding: 3rem;

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

export const InnerContainer = styled.div`
  background: ${({ image }) => `url(${image}) center no-repeat`};
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "")};
  align-items: ${({ center }) => (center ? "center" : "")};

  padding: 1rem;
  max-width: 60%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    max-width: 100%;
  }
`;
