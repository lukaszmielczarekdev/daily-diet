import styled from "styled-components";

/*
Carousel card
Container
Progress bars container
Span
Input
List
*/

// Carousel card
export const CarouselCard = styled.article`
  margin: 2rem 0 2rem 0;
  max-height: 80vh;
  overflow: scroll;
`;

// Container
export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

// Progress bars container
export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: wrap;
`;

// Span
export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

// Input
export const DiaryInput = styled.input`
  width: ${(props) => (props.text ? "50%" : "100px")};
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
