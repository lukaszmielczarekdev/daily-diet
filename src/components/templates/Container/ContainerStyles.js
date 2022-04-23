import styled from "styled-components";

export const Section = styled.section`
  display: ${({ grid }) => (grid ? "grid" : "flex")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 5rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  font-size: ${({ smaller }) => (smaller ? "1.1rem" : "1.2rem")};
  font-weight: 300;
  padding-bottom: 1.8rem;
  color: black;
  text-align: ${({ text }) => (text ? text : "")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ smaller }) => (smaller ? "0.8rem" : "1rem")};
    padding-bottom: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smaller }) => (smaller ? "0.8rem" : "1rem")};
    text-align: ${({ center }) => (center ? "center" : "")};
  }
`;

export const Background = styled.div`
  background: ${({ bgcolor }) => (bgcolor ? bgcolor : "white")}
    ${({ background }) => (background ? `url(${background})` : "")} no-repeat;
  background-position: 100% 0%;
  min-height: ${({ height }) => (height ? height : "")};
  background-size: contain;
  display: grid;

  @media ${({ theme }) => theme.breakpoints.lg} {
    background-position: 100% 0%;
    background-size: contain;
  }

  @media ${({ theme }) => theme.breakpoints.lglandscape} {
    background-position: 400% 0%;
    background-size: contain;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    background-position: 500% 0%;
    background-size: contain;
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    background-position: -15% 0%;
    background-size: cover;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.xslandscape} {
    background-size: contain;
    background-position: 100% 0%;
  }
`;
