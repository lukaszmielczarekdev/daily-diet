import styled from "styled-components";

export const Text = styled.p`
  text-align: left;
  letter-spacing: 0.6px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.semiTransparent};
`;
