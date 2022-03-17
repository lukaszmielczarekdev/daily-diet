import styled from "styled-components";
import plate from "../../assets/Images/plate.jpg";

// Background
export const Background = styled.div`
  background: white url(${plate}) no-repeat;
  background-position: 100% 0%;
  height: 85vh;
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
