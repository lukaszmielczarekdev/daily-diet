import styled from "styled-components";

// Elements List
export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  margin: ${(props) => (props.margin ? props.margin : "1rem 0")};
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  list-style: none;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

// List Element
export const Element = styled.li``;
