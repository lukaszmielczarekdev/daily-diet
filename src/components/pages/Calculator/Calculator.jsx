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
    <Container background={({ theme }) => theme.colors.backgroundPrimary}>
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"1rem 3rem 3rem 3rem"}
        titlePrimary={"build your figure in"}
        titleSecondary={"4 Easy Steps"}
        children={
          <ControlPanel
            align={"baseline"}
            justify={"space-between"}
            padding={"2rem 0 0 0"}
          >
            {steps.map((step) => (
              <Card2 fillColor {...step} key={step.id} />
            ))}
          </ControlPanel>
        }
      />
      <Article
        id={"calculator"}
        backgroundLeft={board}
        padding={"2rem 3rem 3rem 3rem"}
        left={<BmrCalculator />}
        right={
          <ArticleContent
            titlePrimary={"BMR CALCULATOR"}
            titleSecondary={"This is where it starts"}
            description={
              "Diet and training are the two basic tools that allow us to discover our body's maximum potential. In addition to our genetic predispositions (physical and mental conditions), the diet and skillful training (along with regeneration) are the elements that determine how much we can achieve.\n\nKnowing the daily caloric demand, you can calculate the demand for individual macronutrients. This requires the percentage breakdown of macronutrients, which by default is 20% for protein, 50% for carbohydrates and 30% for fat.\nThe percentages can be changed in the user profile section."
            }
            children={<Attributes items={attributes} />}
          />
        }
      />
      <ControlPanel
        padding={"1rem 3rem 3rem 3rem"}
        align={"baseline"}
        justify={"space-between"}
      >
        {tips.map((tip) => (
          <Card fillColor {...tip} key={tip.id} />
        ))}
      </ControlPanel>
    </Container>
  );
};

export default Calculator;
