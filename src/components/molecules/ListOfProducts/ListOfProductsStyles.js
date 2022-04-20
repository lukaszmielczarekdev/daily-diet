import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0")};
`;
