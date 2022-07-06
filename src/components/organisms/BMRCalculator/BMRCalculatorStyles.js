import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 3.5rem 0;
  padding: 1rem;
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

export const StyledSpan = styled.span`
  margin: 1rem 0;
  font-size: 0.8rem;
  padding: 0.8rem;
  display: block;
  color: white;
  border: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px 0;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 60%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 60%;
  }
`;

export const Label = styled.label`
  color: ${({ color }) => (color ? color : "white")};
  border-radius: 10px 0;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.2rem 0;
  align-items: center;
  letter-spacing: 1px;
`;

export const Select = styled.select`
  width: ${({ text }) => (text ? "200px" : "100px")};
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.8rem 0;
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
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px 0;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;

export const FormContainer = styled.div`
  min-width: 300px;
  letter-spacing: 0.5px;
  border-radius: 25px 0;
  width: ${({ alternateView }) => (alternateView ? "fit-content" : "100%")};
  z-index: 2;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? "0" : "2rem")};
  background: ${({ alternateView, theme }) =>
    alternateView ? theme.colors.backgroundBright : ""};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: ${({ alternateView }) => (alternateView ? "1px solid #eaeaea" : "")};
  -webkit-box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};
  -moz-box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};
  box-shadow: ${({ alternateView }) =>
    alternateView ? "0 5px 15px -10px rgba(0, 0, 0, 0.3)" : ""};

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ alternateView }) => (alternateView ? "fit-content" : "100%")};
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
