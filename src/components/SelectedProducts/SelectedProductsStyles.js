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
  border-radius: 25px;
  padding: 2rem;
  margin-top: 1rem;
  background-color: rgb(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  -moz-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  backdrop-filter: blur(2px);
  border: 1px solid rgb(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

// Input
export const MealNameInput = styled.input`
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
  font-size: 1rem;
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
