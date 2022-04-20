import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  list-style: none;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
