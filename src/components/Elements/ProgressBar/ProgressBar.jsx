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
