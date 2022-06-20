import styled from "styled-components";

export const Container = styled.div`
  border-top: ${({ border }) => (border ? "1px solid #eaeaea" : "")};
  margin: 0.5rem 0;
`;

export const Title = styled.div`
  margin: 0 0 1rem 0;
`;

export const List = styled.ul`
  flex-wrap: wrap;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  margin: ${({ margin }) => (margin ? margin : "1rem 0")};
  color: ${({ color, theme }) => (color ? color : theme.colors.primary)};
  list-style: none;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: ${({ centered }) => (centered ? "space-between" : "")};
  }
`;

export const Element = styled.li`
  margin: 0 0.1rem;
`;
