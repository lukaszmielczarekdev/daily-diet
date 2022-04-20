import React from "react";
import { List, Element, Container, Title } from "./SummaryStyles";

const Summary = (props) => {
  const labels = ["kcal", "protein", "carbs", "fat"];

  // memo hook too many rerenders

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
    <Container>
      <Title>{props.name}</Title>
      <List {...props}>{unpackData(props.data)}</List>
    </Container>
  );
};

export default Summary;
