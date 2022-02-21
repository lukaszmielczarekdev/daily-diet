import React from "react";
import { ElementsList, Element } from "./SummaryStyles";

const Summary = (props) => {
  return (
    <ElementsList>
      <Element>
        Kcal: {props.data.kcal.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>
        Protein: {props.data.protein.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>
        Carbs: {props.data.carbs.toFixed(0)}
        &nbsp;|&nbsp;
      </Element>
      <Element>Fat: {props.data.fat.toFixed(0)}</Element>
    </ElementsList>
  );
};

export default Summary;
