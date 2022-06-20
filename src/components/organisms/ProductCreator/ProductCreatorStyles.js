import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px;
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: 1rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  min-width: 300px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const Input = styled.input`
  width: ${({ text }) => (text ? "200px" : "100px")};
  margin: 0.8rem 0;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
`;

export const StyledSpan = styled.span`
  margin: 1rem 0;
  font-size: 0.8rem;
  padding: 0.8rem;
  display: block;
  border: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 10px 0;
  width: 200px;

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const Span = styled.span`
  display: flex;
  margin: 0.5rem 0;
  font-size: 1rem;
  justify-content: center;
`;

export const Label = styled.label`
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
  /* width: 50%; */
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

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    /* width: 60%; */
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    /* width: 60%; */
  }
`;

export const InnerContainer = styled.div`
  min-width: 300px;
  letter-spacing: 0.5px;
  border-radius: 25px 0;
  width: 100%;
  z-index: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.smlandscape} {
    min-width: 280px;
  }
`;
