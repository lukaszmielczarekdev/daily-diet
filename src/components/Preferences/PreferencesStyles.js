import styled from "styled-components";

export const SectionInnerContainer = styled.div`
  width: 100%;
  min-height: 85vh;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 85vh;
  }
`;

export const StyledForm = styled.form`
  margin: 0.5rem;
`;

export const StyledLabel = styled.label`
  margin: 0 0.5rem 0 0.5rem;
`;

export const StyledSelect = styled.select`
  margin: 0 0.5rem 0 0.5rem;
  border: none;
  outline: none;
  :active,
  :focus-visible,
  :hover,
  :focus-within {
    border: none;
    outline: none;
  }
`;

export const StyledInput = styled.input`
  width: ${(props) => (props.text ? "250px" : "50px")};
  margin: 0 0.5rem 0 0.5rem;
  border: none;
  outline: none;
  :active,
  :focus-visible,
  :hover,
  :focus-within {
    border: none;
    outline: none;
  }
`;
