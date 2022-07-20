import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 1rem 0 0 0;
  }
`;
