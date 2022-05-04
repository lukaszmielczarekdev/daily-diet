import styled from "styled-components";

export const Text = styled.p`
  text-align: ${({ text }) => (text ? text : "left")};
  letter-spacing: 0.6px;
  font-size: ${({ smallText }) => (smallText ? "0.8rem" : "1rem")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}` : "1.5rem"};
  line-height: 1.5;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.semiTransparent};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ smallText }) => (smallText ? "0.6rem" : "0.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smallText }) => (smallText ? "0.6rem" : "0.8rem")};
  }
`;