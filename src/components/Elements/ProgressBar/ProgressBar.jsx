import React from "react";
import { BarWrapper, BarContainer, Filler, Label } from "./ProgressBarStyles";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <BarWrapper>
      <Label color={"black"}>{props.label}</Label>
      <BarContainer>
        <Filler completed={completed} color={bgcolor}>
          <Label fontWeight={"bold"}>{`${completed}%`}</Label>
        </Filler>
      </BarContainer>
    </BarWrapper>
  );
};

export default ProgressBar;

export const progressBarsDataTemplate = {
  kcal: { label: "kcal", bgcolor: "#ac2210", completed: 0 },
  protein: {
    label: "protein",
    bgcolor: "#00695c",
    completed: 0,
  },
  carbs: { label: "carbs", bgcolor: "#ef6c00", completed: 0 },
  fat: { label: "fat", bgcolor: "#1cef00", completed: 0 },
};
