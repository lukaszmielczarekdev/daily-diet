import styled from "styled-components";

/*
Container
Header
Progress bars container
Span
Input
List
*/

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background-color: rgb(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  -moz-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  backdrop-filter: blur(2px);
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 25px;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

// Header
export const Header = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

// Progress bars container
export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

// Span
export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

// Input
export const DiaryInput = styled.input`
  width: ${(props) => (props.text ? "100%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${(props) => (props.text ? "100%" : "100px")};
  }
`;

// Elements List
export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin: 1rem 0;
  list-style: none;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;
