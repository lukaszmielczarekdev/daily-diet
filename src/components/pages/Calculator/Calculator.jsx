import React from "react";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Attributes from "../../molecules/Attributes/Attributes";
import { attributes } from "../../../data/constants";
import board from "../../../assets/Images/board.png";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";
import Article from "../../organisms/Article/Article";
import Container from "../../templates/Container/Container";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Card from "../../molecules/Card/Card";
import Card2 from "../../molecules/Card2/Card2";
import { tips, steps } from "../../../data/constants";
import Gallery from "../../organisms/Gallery/Gallery";

const Calculator = () => {
  return (
    <Container bgcolor={({ theme }) => theme.colors.backgroundPrimary}>
      <Gallery
        text={"center"}
        justify={"center"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quis sint repellat. Exercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia."
        }
        padding={"2rem 3rem 3rem 3rem"}
        titlePrimary={"build your figure in"}
        titleSecondary={"4 Easy Steps"}
        children={
          <ControlPanel align={"baseline"}>
            {steps.map((step) => (
              <Card2 fillColor {...step} />
            ))}
          </ControlPanel>
        }
      />
      <Article
        id={"calculator"}
        backgroundLeft={board}
        padding={"3rem 3rem 2rem 3rem"}
        left={<BmrCalculator />}
        right={
          <ArticleContent
            titlePrimary={"BMR CALCULATOR"}
            titleSecondary={"Nutrition For Your Health"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quis sint repellat. Exercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia.\n\nExercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia."
            }
            children={<Attributes items={attributes} />}
          />
        }
      />
      <ControlPanel margin={"0 0 3rem 0"}>
        {tips.map((tip) => (
          <Card fillColor {...tip} />
        ))}
      </ControlPanel>
    </Container>
  );
};

export default Calculator;
