import styled from "styled-components";

// Form
export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

// Input
export const Input = styled.input`
  width: ${(props) => (props.text ? "250px" : "100px")};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;

// Select
export const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  text-align: center;
`;

// Label
export const Label = styled.label`
  color: grey;
  border-radius: 10px;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.2rem 0;
  align-items: center;
`;

// Button
export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  display: block;
  color: white;
  border: none;
  background-color: rgba(154, 205, 50, 0.9);
  border-radius: 10px;
  cursor: pointer;
`;
