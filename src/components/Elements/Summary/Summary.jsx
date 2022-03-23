import React from "react";
import { ElementsList, Element } from "./SummaryStyles";

const Summary = ({
  data: { kcal, protein, carbs, fat },
  fontSize,
  margin,
  color,
}) => {
  return (
    <ElementsList fontSize={fontSize} margin={margin} color={color}>
      <Element>
        Kcal: {kcal.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>
        Protein: {protein.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>
        Carbs: {carbs.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>Fat: {fat.toFixed(0)}</Element>
    </ElementsList>
  );
};

export default Summary;
