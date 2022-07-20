import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  width: fit-content;
`;

export const StyledSpan = styled.span`
  margin-bottom: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 25%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 30%;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 50%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  cursor: ${({ readOnly }) => (readOnly ? "normal" : "pointer")};
`;
