import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem 0 0.5rem 0;
  border-top: 1px solid #eaeaea;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
