import styled from "styled-components";
import hero_bg from "../../assets/Images/logo.jpg";

// Background
export const HeroBg = styled.div`
  background: white url(${hero_bg}) no-repeat;
  background-position: 100% 0%;
  min-height: 85vh;
  background-size: contain;
  display: grid;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-position: 100% 0%;
    background-size: contain;
    grid-template-columns: 1fr 1fr;
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

// Section
export const HeroSection = styled.div`
  padding: 3rem;
  width: 100%;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  position: relative;
  text-align: center;
  align-content: center;
`;

// Title
export const Header = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  padding: 1rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

// Span
export const HeaderSpan = styled.span`
  display: block;
  margin: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

// Input
export const FormContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.8);
  -webkit-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 0 -3em 0;
  padding: 2em;
  letter-spacing: 0.5px;
  border-radius: 25px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2em -3em 0;
  }
`;
