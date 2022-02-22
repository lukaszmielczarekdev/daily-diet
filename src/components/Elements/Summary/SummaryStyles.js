import styled from "styled-components";

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
