import styled from "styled-components";

/*
Container
Product info
Summary container
Product Title
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
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
  background-color: transparent;
`;

// Summary container
export const SummaryContainer = styled.div`
  margin: 0.5rem 0 0.5rem 0.5rem;
`;

// Product Title
export const ProductTitle = styled.div`
  margin: 0 0 0 0.5rem;
`;
