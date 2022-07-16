import styled from "styled-components";

export const Form = styled.form`
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  min-width: 480px;
  max-width: 480px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-width: 350px;
    max-width: 350px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 300px;
    max-width: 300px;
  }
`;

export const TextArea = styled.textarea`
  min-width: 480px;
  max-width: 480px;
  min-height: 350px;
  max-height: 350px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    min-width: 350px;
    max-width: 350px;
    min-height: 420px;
    max-height: 420px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-width: 300px;
    max-width: 300px;
    min-height: 460px;
    max-height: 460px;
  }
`;

export const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  margin: ${({ margin }) => (margin ? margin : 0)};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
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
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: ${({ margin }) => (margin ? margin : "0.5rem 0")};
  border-radius: 10px 0;
  text-align: center;
  border: none;
  background-color: ${({ green, red, theme }) => {
    if (green) return `${theme.colors.green}`;
    if (red) return `${theme.colors.warning}`;
    else return `transparent`;
  }};
  color: ${({ color }) => (color ? `${color}` : "black")};
  cursor: pointer;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  letter-spacing: 0.5px;
  border-radius: 25px 0;
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
    padding: 1rem;
    margin-top: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    margin-top: 0;
  }
`;
