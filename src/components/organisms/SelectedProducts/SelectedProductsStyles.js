import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 25px 0;

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
  border-radius: 10px 0;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
`;
