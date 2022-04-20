import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${({ text }) => (text ? "250px" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;

export const Label = styled.label`
  color: grey;
  border-radius: 10px;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.2rem 0;
  align-items: center;
  letter-spacing: 1px;
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  margin: 1rem 0;
  padding: 0.8rem;
  width: 100%;
  display: block;
  color: white;
  border: none;
  background-color: rgba(154, 205, 50, 0.9);
  border-radius: 10px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  -moz-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  border: 1px solid rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  margin: 0 -3em 0;
  padding: 2em;
  letter-spacing: 0.5px;
  border-radius: 25px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1em -3em 0;
  }
`;
