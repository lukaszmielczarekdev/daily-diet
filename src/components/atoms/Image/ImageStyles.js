import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${({ width }) => (width ? `${width}` : "90%")};
  border-radius: 25px 0;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 90%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
`;