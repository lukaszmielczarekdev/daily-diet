import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  width: fit-content;
`;

export const StyledSpan = styled.span`
  margin-bottom: 0.4rem;
  font-size: 80%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: ${({ bigger }) => (bigger ? "40%" : "20%")};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ bigger }) => (bigger ? "40%" : "25%")};
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: ${({ bigger }) => (bigger ? "40%" : "30%")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ bigger }) => (bigger ? "40%" : "60%")};
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  cursor: ${({ readOnly }) => (readOnly ? "normal" : "pointer")};
`;
