import styled from "styled-components";

export const Wrapper = styled.article`
  max-width: 1280px;
  display: flex;
  text-align: ${({ text }) => (text ? text : "left")};
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: ${({ padding }) => (padding ? padding : "3rem")};
  margin: 0;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};

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

export const InnerContainer = styled.div`
  background: ${({ backgroundLeft, backgroundRight }) => {
    if (backgroundLeft) return `url(${backgroundLeft}) center no-repeat`;
    if (backgroundRight) return `url(${backgroundRight}) center no-repeat`;
    else return `transparent`;
  }};
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "")};
  align-items: ${({ center }) => (center ? "center" : "")};
  padding: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }
`;
