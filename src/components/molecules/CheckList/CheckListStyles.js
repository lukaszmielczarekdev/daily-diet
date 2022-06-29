import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
  justify-content: center;
  align-items: ${({ align }) => (align ? align : "center")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  text-align: ${({ text }) => (text ? text : "left")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    margin: 0;
    padding: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0;
    padding: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ChildrenContainer = styled.div`
  margin-bottom: 0.2rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.6px;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  font-size: ${({ smallText }) => (smallText ? "0.9rem" : "0.9rem")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ smallText }) => (smallText ? "0.7rem" : "0.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smallText }) => (smallText ? "0.7rem" : "0.8rem")};
  }
`;
