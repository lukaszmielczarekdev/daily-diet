import React from "react";
import Title from "../../atoms/Title/Title";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Container from "../../templates/Container/Container";
import Attributes from "../../molecules/Attributes/Attributes";
import { Wrapper, Description, InnerContainer } from "./CalculatorStyles";
import { attributes } from "../../../data/constants";
import board from "../../../assets/Images/board.png";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";

const Calculator = ({
  titlePrimary,
  titleSecondary,
  description,
  id,
  background,
}) => {
  return (
    // id={"calculator"}
    <Container id={id}>
      <Wrapper>
        <InnerContainer center background={board}>
          {/* <BmrCalculator /> */}
        </InnerContainer>
        <InnerContainer>
          <ArticleContent
            titlePrimary={"BMR CALCULATOR"}
            titleSecondary={"Care About Nutrition For Your Health"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quis sint repellat. Exercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia."
            }
            children={<Attributes items={attributes} />}
          />
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

export default Calculator;
