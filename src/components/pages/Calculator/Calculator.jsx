import React from "react";
import Title from "../../atoms/Title/Title";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Container from "../../templates/Container/Container";
import burger from "../../../assets/Images/logo.jpg";

const Calculator = () => {
  return (
    <Container background={burger} text={"center"} height={"94vh"}>
      <Title primary={"BMR"} secondary={"Calculator"} />
      <BmrCalculator />
    </Container>
  );
};

export default Calculator;
