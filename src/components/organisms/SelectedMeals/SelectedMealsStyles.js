import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px;
  margin: 1rem;
  padding: 2rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  min-width: 300px;

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
  width: ${({ text }) => (text ? "50%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
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
