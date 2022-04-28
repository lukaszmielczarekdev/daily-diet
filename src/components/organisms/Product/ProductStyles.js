import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const ProductActions = styled.div`
  margin: 0.5rem 0;
`;

export const ProductForm = styled.form`
  align-items: center;
`;

export const ProductInput = styled.input`
  width: ${({ text }) => (text ? "250px" : "100px")};
  font-size: 0.8rem;
  padding: 0.4rem;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;
`;
