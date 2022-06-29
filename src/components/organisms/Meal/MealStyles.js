import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px 0;
  margin: ${({ margin }) => (margin ? margin : "0")};
  margin-top: 1rem;
  padding: 2rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  margin: 0.5rem 0;
  font-size: 1rem;
  justify-content: center;
`;
