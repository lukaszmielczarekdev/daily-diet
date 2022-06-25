import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  padding-bottom: 1rem;
  border-bottom: ${({ active }) => (active ? "1px solid lightgray" : "")};

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 1rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1rem 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  padding: 1rem;
  border-radius: 50%;
  z-index: 2;

  background-color: ${({ color, theme }) => {
    if (color === "red") return `${theme.colors.warning}`;
    if (color === "green") return `${theme.colors.green}`;
    if (color === "yellow") return `${theme.colors.yellow};`;
    else return `white`;
  }};

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 50px;
    height: 50px;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 50px;
    height: 50px;
  }
`;

export const Header = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 0.8rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const Span = styled.span`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  display: block;
  font-size: 1rem;
  margin-right: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 150px;
  margin-left: -20%;
  border-radius: 25px;
  padding: 0.8rem 0.8rem 0.8rem 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 120px;
    padding: 0.6rem 0.6rem 0.6rem 60px;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 120px;
    padding: 0.6rem 0.6rem 0.6rem 60px;
  }
`;
