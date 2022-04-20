import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

// Product info
export const ProductInfo = styled.span`
  width: ${({ text }) => (text ? "250px" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
  background-color: transparent;
`;

export const SummaryContainer = styled.div`
  margin: 0.3rem 0 0.3rem 0.3rem;
`;

export const ProductTitle = styled.div`
  margin: 0 0 1rem 0.5rem;
`;
