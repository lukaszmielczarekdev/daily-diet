import styled from "styled-components";

export const Form = styled.form`
  margin-top: 0.5rem;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Input = styled.input`
  width: ${({ cube }) => (cube ? "30px" : "240px")};
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;
`;

export const Select = styled.select`
  font-size: 0.8rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px 0;
  text-align: center;
`;

export const Button = styled.button`
  width: 240px;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  padding: 0.6rem;
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
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0" : "2rem")};
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: fit-content;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
