import React from "react";
import Title from "../../atoms/Title/Title";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Container from "../../templates/Container/Container";
import Attributes from "../../molecules/Attributes/Attributes";
import { Wrapper, Description, InnerContainer } from "./CalculatorStyles";
import { attributes } from "../../../data/constants";
import board from "../../../assets/Images/board.png";

const Calculator = ({ title, margin }) => {
  return (
    <Container id={"calculator"} text={"center"}>
      <Wrapper margin={margin} padding={"1rem 2rem"}>
        <InnerContainer center image={board}>
          <BmrCalculator />
        </InnerContainer>
        <InnerContainer>
          <Title
            titlePrimary={"BMR Calculator"}
            titleSecondary={"Care About Nutrition For Your Health"}
          />

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam
            quis sint repellat. Exercitationem numquam alias quia harum,
            reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores
            voluptas repellendus molestiae commodi mollitia.
          </Description>
          <Attributes items={attributes} />
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

export default Calculator;
