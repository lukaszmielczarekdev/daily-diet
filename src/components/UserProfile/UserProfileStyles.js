import styled from "styled-components";
import salad from "../../assets/Images/salad.jpg";

// Inner container
export const SectionInnerContainer = styled.div`
  width: 100%;
  min-height: 85vh;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 85vh;
  }
`;

// Background
export const Background = styled.div`
  background: white url(${salad}) no-repeat;
  background-position: 100% 0%;
  min-height: 85vh;
  background-size: contain;
  display: grid;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-position: 100% 0%;
    background-size: contain;
  }

  @media ${(props) => props.theme.breakpoints.lglandscape} {
    background-position: 400% 0%;
    background-size: contain;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    background-position: 500% 0%;
    background-size: contain;
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    background-position: -15% 0%;
    background-size: cover;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.xslandscape} {
    background-size: contain;
    background-position: 100% 0%;
  }
`;
