import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0.5rem;
`;

export const StyledLabel = styled.label`
  margin: 0 0.5rem 0 0.5rem;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0")};
`;

export const StyledTitle = styled.span`
  margin: 0.5rem 0;
  font-weight: bold;
  color: green;
  display: flex;
  font-size: ${({ main }) => (main ? "1.3rem" : "1rem")};
`;
