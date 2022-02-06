import styled from "styled-components";

// Container
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0.5rem;
  padding: 1rem 3rem 0rem 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;

//NavSection
export const NavSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

// NavTitle
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

//NavSection
export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${(props) => (props.center ? "center" : "")};
`;

// NavLink
export const NavigationLink = styled.a`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
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
