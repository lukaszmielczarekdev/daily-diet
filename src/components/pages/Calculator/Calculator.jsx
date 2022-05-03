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
import { tips } from "../../../data/constants";

const Calculator = () => {
  return (
    <Container bgcolor={({ theme }) => theme.colors.backgroundPrimary}>
      <Article
        id={"calculator"}
        backgroundLeft={board}
        padding={"3rem 3rem 1rem 3rem"}
        left={<BmrCalculator />}
        right={
          <ArticleContent
            titlePrimary={"BMR CALCULATOR"}
            titleSecondary={"Nutrition For Your Health"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quis sint repellat. Exercitationem numquam alias quia harum, reprehenderit ipsa nisi atque quis voluptatum ad aut asperiores voluptas repellendus molestiae commodi mollitia."
            }
            children={<Attributes items={attributes} />}
          />
        }
      />
      <ControlPanel margin={"1rem 0 3rem 0"}>
        {tips.map(({ id, color, icon, header, description }) => (
          <Card
            fillColor
            key={id}
            color={color}
            icon={icon}
            header={header}
            description={description}
          />
        ))}
      </ControlPanel>
    </Container>
  );
};

export default Calculator;
