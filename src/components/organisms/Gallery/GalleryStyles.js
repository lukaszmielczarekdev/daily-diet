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
    padding: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    padding: 1rem;
  }
`;

export const InnerContainer = styled.div`
  background: ${({ background }) => {
    if (background) return `url(${background}) center no-repeat`;
    else return `transparent`;
  }};
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "")};
  align-items: ${({ center }) => (center ? "center" : "")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem 0;
    max-width: 100%;
  }
`;
