import styled from "styled-components";

export const Form = styled.form`
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 240px;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;
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
  margin: 0.5rem 0;
  border-radius: 10px 0;
  text-align: center;
  border: none;
  background-color: ${({ green, theme }) => {
    if (green) return `${theme.colors.green}`;
    else return `transparent`;
  }};
  color: ${({ color }) => (color ? `${color}` : "black")};
  cursor: pointer;

  /* transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  } */
`;

export const FormContainer = styled.div`
  min-width: 300px;
  letter-spacing: 0.5px;
  border-radius: 25px 0;
  width: 100%;
  z-index: 2;
  margin-top: 4rem;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
