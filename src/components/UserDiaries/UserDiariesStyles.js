import styled from "styled-components";

export const DiaryCarouselContainer = styled.div`
  display: grid;
  margin: 2rem 3rem 1rem 0;
  scroll-snap-align: center;
  overflow: visible;
  position: relative;
  height: fit-content;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-items: center;
    align-content: center;
    justify-content: center;
    scroll-snap-align: center;
    margin: 2rem 1rem 0 1rem;
  }
`;
