import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0.5rem;
  padding: 2.5rem;
  height: 6vh;
  background-color: yellowgreen;

  @media ${(props) => props.theme.breakpoints.sm} {
    column-gap: 0.2rem;
    row-gap: 0.2rem;
    padding: 2rem 1rem;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

export const NavigationTitle = styled.div`
  margin: 1rem;
  font-size: 1.2rem;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    margin: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${(props) => (props.center ? "center" : "")};
`;

export const NavigationLink = styled.a`
  color: black;
  font-size: ${({ size }) => (size ? size : "1.2rem")};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  transition: 0.4s ease;
  margin: 1rem;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    font-size: 1rem;
    margin: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;
