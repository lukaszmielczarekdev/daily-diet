import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 150px;
  max-width: 300px;
  margin: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1rem 0;
    max-width: 350px;
  }
`;

export const StyledImage = styled.img`
  width: 180px;
  border-radius: 50%;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Span = styled.span`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  margin-top: -30%;
  border-radius: 25px;
  padding: 100px 1.5rem 1.5rem 1.5rem;
  z-index: 0;
`;
