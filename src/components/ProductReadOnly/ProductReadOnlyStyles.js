import styled from "styled-components";

/*
Container
Product info
Summary container
Product Title
List
List item
*/

// Container
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

// Product info
export const ProductInfo = styled.span`
  width: ${(props) => (props.text ? "250px" : "100px")};
  background-color: white;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
`;

// Summary container
export const SummaryContainer = styled.div`
  margin: 0.5rem 0 0.5rem 0.5rem;
`;

// Product Title
export const ProductTitle = styled.div`
  margin: 0 0 0 0.5rem;
`;

// List
export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin: 0 0 0 0.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  color: green;
`;

// List item
export const Element = styled.li``;
