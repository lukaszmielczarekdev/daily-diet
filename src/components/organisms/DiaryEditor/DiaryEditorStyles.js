import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px;
  margin-top: 1rem;
  padding: 2rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  margin: 0.5rem 0;
  font-size: 1rem;
  justify-content: center;
`;

export const DiaryInput = styled.input`
  width: ${({ text }) => (text ? "50%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.2rem 0;
  border: 1px solid black;
  border-radius: 10px 0;
  align-self: center;

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
`;

export const MealNameInput = styled.input`
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
