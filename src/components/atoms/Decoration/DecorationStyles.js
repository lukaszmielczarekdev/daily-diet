import styled from "styled-components";

export const StyledImage = styled.img`
  width: 10rem;
  border-radius: 25px 0;
  position: absolute;
  z-index: 5;
  opacity: 80%;
  margin-top: ${({ margin }) => (margin ? `${margin}` : 0)};

  left: ${({ left }) => (left ? `${left}` : "50%")};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 100%;
    width: 8rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
    width: 5rem;
  }
`;

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
`;
