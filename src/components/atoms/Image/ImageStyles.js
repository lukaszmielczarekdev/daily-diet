import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => (width ? `${width}` : "80%")};
  border-radius: 25px 0;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
  }
`;

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
`;
