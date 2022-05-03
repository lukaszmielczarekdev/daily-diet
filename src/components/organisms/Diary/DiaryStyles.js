import styled from "styled-components";

export const CarouselCard = styled.article`
  padding: 1rem;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  text-align: left;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  background-color: ${({ theme }) => theme.colors.backgroundBright};
  border-radius: 25px 0;
  padding: 2rem;
  width: 100%;
  /* max-width: 50vw; */
  margin: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    max-width: 100vw;
  }
`;

export const ProgressBarsContainer = styled.ul`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: wrap;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const DiaryInput = styled.input`
  width: ${({ text }) => (text ? "50%" : "100px")};
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ text }) => (text ? "100%" : "100px")};
  }
`;

export const ElementsList = styled.ul`
  flex-wrap: wrap;
  font-size: 1.2rem;
  margin: 1rem 0;
  list-style: none;
  display: flex;
`;
