import styled from "styled-components";

/*
Container
Input
List
List item
*/

// Container
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Input
export const MealNameInput = styled.input`
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

// List Element
export const Element = styled.li``;
