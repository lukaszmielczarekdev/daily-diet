import styled from "styled-components";

export const StyledInputField = styled.input`
  width: ${({ text }) => (text ? "200px" : "80px")};
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;
`;
