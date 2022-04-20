import React from "react";
import Title from "../../atoms/Title/Title";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Container from "../../templates/Container/Container";
import { InnerContainer } from "./HeroStyles";
import burger from "../../../assets/Images/logo.jpg";

const Hero = () => {
  return (
    <Container background={burger}>
      <InnerContainer>
        <Title primary={"Daily"} secondary={"Diet Assistant"} />
        <BmrCalculator />
      </InnerContainer>
    </Container>
  );
};

export default Hero;
