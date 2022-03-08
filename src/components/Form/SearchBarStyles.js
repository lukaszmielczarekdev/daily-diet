import styled from "styled-components";

/*
Search bar container
Input
List
List item
*/

// Search bar container
export const Container = styled.div`
  margin: 2rem 0 2rem 0;
  max-height: 50vh;
  overflow: scroll;
  width: 100%;
`;

// Input
export const StyledInput = styled.input`
  width: ${(props) => (props.text ? "100%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${(props) => (props.text ? "100%" : "100px")};
  }
`;

// List
export const SearchList = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 1;
`;

// List Item
export const StyledListItem = styled.li`
  background-color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0.5rem 0 0 0;
  }
`;
