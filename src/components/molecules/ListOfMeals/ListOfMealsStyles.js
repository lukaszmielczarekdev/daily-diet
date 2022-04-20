import styled from "styled-components";

export const Title = styled.span`
  margin: 0.5rem 0;
  font-weight: bold;
  color: green;
  display: flex;
  font-size: ${({ main }) => (main ? "1.3rem" : "1rem")};

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: ${({ margin }) => (margin ? margin : "0")};
`;
