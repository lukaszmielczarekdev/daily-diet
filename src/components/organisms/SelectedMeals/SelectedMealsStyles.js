import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  background-color: rgb(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  -moz-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  backdrop-filter: blur(2px);
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 25px;
  padding: 2rem;
  min-width: 40vw;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: wrap;
  font-size: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const StyledSpan = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const DiaryInput = styled.input`
  width: ${({ text }) => (text ? "100%" : "100px")};
  font-size: 1rem;
  padding: 0.3rem;
  margin: 0.3rem 0;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;

export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin: 1rem 0;
  list-style: none;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: center;
  }
`;
