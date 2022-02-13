import React from "react";
import {
  HeroSection,
  HeroBg,
  Header,
  HeaderSpan,
  FormContainer,
} from "./HeroStyles";
import BmrCalculator from "../BmrCalculator/BmrCalculator";

const Hero = () => {
  return (
    <HeroBg>
      <HeroSection>
        <Header>
          <HeaderSpan>Your Minimalist</HeaderSpan>Diet Assistant
        </Header>
        <FormContainer>
          <BmrCalculator />
        </FormContainer>
      </HeroSection>
    </HeroBg>
  );
};

export default Hero;
