import React from "react";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import Attributes from "../../molecules/Attributes/Attributes";
import Description from "../../atoms/Description/Description";
import {
  attributes,
  calculatorDescription,
  macrosDescription,
} from "../../../data/constants";
import board from "../../../assets/Images/board.png";
import ArticleContent from "../../organisms/ArticleContent/ArticleContent";
import Article from "../../organisms/Article/Article";
import Container from "../../templates/Container/Container";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Card from "../../molecules/Card/Card";
import Card2 from "../../molecules/Card2/Card2";
import { tips, steps } from "../../../data/constants";
import Gallery from "../../organisms/Gallery/Gallery";
import { VanishingContent } from "../../molecules/VanishingContent/VanishingContent";

const Calculator = () => {
  return (
    <Container background={({ theme }) => theme.colors.backgroundPrimary}>
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"1rem 3rem 1.5rem 3rem"}
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
        padding={"2rem"}
        alignSelfRightColumn={"end"}
        alignSelfLeftColumn={"flex-start"}
        left={<BmrCalculator />}
        right={
          <ArticleContent
            titlePrimary={"BMR & TDEE CALCULATOR"}
            titleSecondary={"This is where it starts"}
            marginBottom={"0"}
            description={
              <>
                {calculatorDescription}
                <VanishingContent padding={"0"}>
                  {macrosDescription}
                  <Attributes items={attributes} />
                </VanishingContent>
              </>
            }
          />
        }
        children={
          <>
            <VanishingContent padding={"0 2rem"} smallScreen>
              <Description thinText>{macrosDescription}</Description>
              <Attributes items={attributes} smallScreen />
            </VanishingContent>
            <ControlPanel
              padding={"3rem 0.5rem 0 0.5rem"}
              align={"baseline"}
              justify={"space-between"}
            >
              {tips.map((tip) => (
                <Card fillColor {...tip} key={tip.id} />
              ))}
            </ControlPanel>
          </>
        }
      />
    </Container>
  );
};

export default Calculator;
