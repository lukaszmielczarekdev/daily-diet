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

export const CarouselTitle = styled.h3`
  font-size: ${(props) => (props.smaller ? "1.5rem" : "2rem")};
  line-height: ${(props) => (props.smaller ? "2rem" : "2.5rem")};
  align-self: center;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    120deg,
    #ffffff 20%,
    rgba(255, 255, 255, 0.66) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${(props) => (props.separate ? "1rem" : "0.5rem")};
  padding: ${(props) => (props.smaller ? "0" : "3rem 0 1rem")};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.smaller ? "1.2rem" : "1.5rem")};
    line-height: ${(props) => (props.smaller ? "1.5rem" : "2rem")};
    margin-bottom: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    padding: ${(props) => (props.smaller ? "0" : "2rem 0 1rem")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 3rem;
    font-size: ${(props) => (props.smaller ? "1.2rem" : "1.5rem")};
    line-height: ${(props) => (props.smaller ? "1.5rem" : "2rem")};
    margin-bottom: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    padding: ${(props) => (props.smaller ? "1rem 0 0.5rem" : "0")};
    max-width: 100%;
    text-align: ${(props) => (props.center ? "center" : "")};
  }
`;

export const CarouselText = styled.p`
  font-size: ${(props) => (props.smaller ? "1rem" : "1.5rem")};
  line-height: ${(props) => (props.high ? "2.5rem" : "2rem")};
  font-weight: 300;
  padding: ${(props) => (props.padding ? "0.5rem" : "0")};
  padding-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 650px;
    font-size: ${(props) => (props.smaller ? "1rem" : "1.2rem")};
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    padding-bottom: 1rem;
    text-align: ${(props) => (props.center ? "center" : "justify")};
  }
`;
