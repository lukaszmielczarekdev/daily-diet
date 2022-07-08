import styled from "styled-components";

export const Text = styled.p`
  text-align: ${({ text }) => (text ? text : "left")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  font-weight: ${({ thinText }) => (thinText ? 300 : "normal")};
  letter-spacing: 0.6px;
  font-size: ${({ smallText }) => (smallText ? "0.9rem" : "1rem")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}` : "1.5rem"};
  line-height: 1.5;
  width: ${({ width }) => (width ? width : "")};
  white-space: pre-line;
  color: ${({ color, theme }) =>
    color ? color : theme.colors.semiTransparent};

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    font-size: ${({ smallText }) => (smallText ? "0.8rem" : "0.8rem")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ smallText }) => (smallText ? "0.8rem" : "0.8rem")};
  }
`;
