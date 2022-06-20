import React from "react";
import { List, Element, Container, Title } from "./SummaryStyles";

const Summary = (props) => {
  const labels = ["kcal", "protein", "carbs", "fat"];

  const unpackData = (items) => {
    const arr = [];

    for (const [key, value] of Object.entries(items)) {
      if (labels.includes(key)) {
        arr.push(
          <Element key={key}>
            {key}: {value.toFixed(0)} {key === "fat" ? "" : "|"}
          </Element>
        );
      }
    }
    return arr;
  };

  return (
    <Container {...props}>
      <Title>{props.title}</Title>
      <List {...props}>{unpackData(props.data)}</List>
    </Container>
  );
};

export default Summary;
