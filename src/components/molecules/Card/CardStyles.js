import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  margin: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 10%;
  z-index: 2;
  width: 60px;
  height: 60px;
  border-radius: 25px 0;
  padding: 1rem;
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
  font-size: 1.5rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid #eaeaea;
  margin-top: -10%;
  border-radius: 25px;
  padding: 50px 1.5rem 1.5rem 1.5rem;
  z-index: 0;

  background-color: ${({ fillColor }) =>
    fillColor ? ({ theme }) => theme.colors.backgroundBright : "white"};
`;
