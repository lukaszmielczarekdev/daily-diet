import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  padding: 0.5rem;
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 25px;
  padding: 1rem;
  min-width: 280px;
  height: 500px;
  max-width: 280px;
  overflow: scroll;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    :hover {
      transform: scale(1);
    }

    max-width: 320px;
  }

  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  background-color: ${({ fillColor }) =>
    fillColor ? ({ theme }) => theme.colors.backgroundBright : "white"};
`;
