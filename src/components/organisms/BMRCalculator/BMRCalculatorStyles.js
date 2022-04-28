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
  border-radius: 10px 0;
  text-align: center;
`;

export const Label = styled.label`
  color: grey;
  border-radius: 10px 0;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.2rem 0;
  align-items: center;
  letter-spacing: 1px;
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px 0;
  text-align: center;
`;

export const Button = styled.button`
  margin: 1rem 0;
  font-size: 1rem;
  padding: 0.8rem;
  width: 60%;
  display: block;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px 0;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  min-width: 250px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 2rem;
  letter-spacing: 0.5px;
  border-radius: 25px 0;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }
`;
