import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 250px;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    max-width: 300px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 300px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 25px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 0.5rem;
  background-color: transparent;
`;
