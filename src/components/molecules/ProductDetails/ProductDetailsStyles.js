import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  max-width: 350px;
  margin: 1rem;
`;

export const StyledImage = styled.img`
  width: ${({ width }) => (width ? `${width}` : "100%")};
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
  font-size: 1.2rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 1rem 0;
  white-space: pre-line;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
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
  margin-top: -35%;
  border-radius: 25px;
  padding: 100px 1rem 1rem 1rem;
  z-index: 0;
`;
