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

export const StyledForm = styled.form``;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  width: 50px;
  margin: 0 0.5rem 0 0.5rem;
`;

/* <input
  id="ingredientInput"
  type="text"
  placeholder={props.placeholder}
  onChange={handleFilter}
/>; */
