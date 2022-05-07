import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0 2rem 0;
  max-height: 50vh;
  overflow: scroll;
  margin: 1rem;
`;

export const Wrapper = styled.section`
  display: flex;
  text-align: left;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px;
  margin: 1rem 1rem 5rem 1rem;
  padding: 2rem;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  min-width: 300px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 250px;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px 0;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const SearchList = styled.ul`
  padding: 0;
  cursor: pointer;
  list-style: none;
`;

export const IconContainer = styled.div`
  margin: 0 0.2rem 0 0;
`;

export const StyledListItem = styled.li`
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0.5rem 0 0 0;
  }
`;
