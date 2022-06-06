import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1rem 0;
  }
`;

export const StyledImage = styled.img`
  width: 60px;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const Header = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.3;
  margin: 0.8rem 0;
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

export const Span = styled.span`
  white-space: pre-line;
  text-align: left;
  font-weight: normal;
  display: block;
  font-size: 0.8rem;
  margin-right: 2rem;
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 150px;
  margin-left: -20%;
  border-radius: 25px;
  padding: 1rem 1rem 1rem 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
