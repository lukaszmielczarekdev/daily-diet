import styled from "styled-components";

/*
Container
Summary container
Product actions
Product Title
List
List item
Form
Input
*/

// Container
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

// Summary container
export const SummaryContainer = styled.div`
  margin: 0.5rem 0 0.5rem 0.5rem;
`;

// Product actions
export const ProductActions = styled.div`
  margin: 0.5rem 0;
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

// Form
export const ProductForm = styled.form`
  align-items: center;
  justify-content: center;
`;

// Input
export const ProductInput = styled.input`
  width: ${(props) => (props.text ? "250px" : "100px")};
  font-size: 0.8rem;
  padding: 0.5rem;
  /* margin-bottom: 0.5rem; */
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;
