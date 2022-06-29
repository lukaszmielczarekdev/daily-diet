import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${({ text }) => (text ? "200px" : "120px")};
  margin: 0.8rem 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;
`;

export const Button = styled.button`
  width: ${({ text }) => (text ? "200px" : "100px")};
  margin: 0.8rem 0;
  font-size: 0.8rem;
  padding: 0.8rem;
  display: block;
  color: white;
  border: none;
  background-color: ${({ warning, theme }) =>
    warning ? theme.colors.warning : theme.colors.green};
  border-radius: 10px 0;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  min-width: 300px;
  letter-spacing: 0.5px;
  border-radius: 25px 0;
  width: fit-content;
  z-index: 2;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0" : "4rem")};
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  @media ${({ theme }) => theme.breakpoints.md} {
    width: fit-content;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
