import styled from "styled-components";

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
  min-width: 40vw;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const MealNameInput = styled.input`
  width: ${({ text }) => (text ? "100%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
`;
