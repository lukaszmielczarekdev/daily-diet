import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  text-align: ${({ text }) => (text ? text : "left")};
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ smallText }) => (smallText ? "0.8rem" : "1rem")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ smallText }) => (smallText ? "0.6rem" : "0.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smallText }) => (smallText ? "0.6rem" : "0.8rem")};
  }
`;
