import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 250px;
  align-items: center;
  margin: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  padding: 1rem;
  border-radius: 15px 0;

  background-color: ${({ color, theme }) => {
    if (color === "red") return `${theme.colors.warning}`;
    if (color === "green") return `${theme.colors.green}`;
    if (color === "yellow") return `${theme.colors.yellow};`;
    else return `white`;
  }};

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
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
  padding: 0.5rem;
  background-color: transparent;
`;
