import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column-reverse;
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
  background: ${({ backgroundLeft, backgroundRight }) => {
    if (backgroundLeft) return `url(${backgroundLeft}) center no-repeat`;
    if (backgroundRight) return `url(${backgroundRight}) center no-repeat`;
    else return `transparent`;
  }};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "")};
  align-items: ${({ center }) => (center ? "center" : "")};

  align-self: ${({ alignSelfRightColumn, alignSelfLeftColumn }) => {
    if (alignSelfRightColumn) return alignSelfRightColumn;
    if (alignSelfLeftColumn) return alignSelfLeftColumn;
    else return ``;
  }};

  padding: 1rem;
  max-width: 70%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  padding: ${({ padding }) => (padding ? padding : "3rem")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    padding: 3rem 1rem 1rem 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 3rem 1rem 1rem 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 3rem 1rem 1rem 1rem;
  }
`;
