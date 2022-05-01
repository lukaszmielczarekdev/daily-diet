import React from "react";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Attributes from "../../molecules/Attributes/Attributes";
import { attributes } from "../../../data/constants";
import board from "../../../assets/Images/board.png";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";
import Article from "../../organisms/Article/Article";
import Container from "../../templates/Container/Container";

const Calculator = () => {
  return (
    <Container>
      <Article
        id={"calculator"}
        backgroundLeft={board}
        left={<BmrCalculator />}
        right={
          <ArticleContent
            titlePrimary={"BMR CALCULATOR"}
            titleSecondary={"Care About Nutrition For Your Health"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quis sint repellat. Exercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia."
            }
            children={<Attributes items={attributes} />}
          />
        }
      />
    </Container>
  );
};

export default Calculator;
