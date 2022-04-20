import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem 0;
`;

export const Title = styled.div`
  margin: 0 0 1rem 0.5rem;
`;

export const List = styled.ul`
  flex-wrap: wrap;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  margin: ${({ margin }) => (margin ? margin : "1rem 0")};
  color: ${({ color, theme }) => (color ? color : theme.colors.primary)};
  list-style: none;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: ${({ centered }) => (centered ? "center" : "")};
  }
`;

export const Element = styled.li`
  margin: 0 0.1rem;
`;
