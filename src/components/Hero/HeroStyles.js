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
  padding: 0;

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
  -webkit-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  -moz-box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  box-shadow: 0 8px 32px 0px rgba(30, 40, 135, 0.35);
  border: 1px solid rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  margin: 0 -3em 0;
  padding: 2em;
  letter-spacing: 0.5px;
  border-radius: 25px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1em -3em 0;
  }
`;
