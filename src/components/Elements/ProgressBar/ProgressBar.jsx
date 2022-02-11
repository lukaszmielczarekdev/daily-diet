import React from "react";
import { BarContainer, Filler, Label } from "./ProgressBarStyles";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <>
      <Label color={"black"}>{props.label}</Label>
      <BarContainer>
        <Filler completed={completed} color={bgcolor}>
          <Label fontWeight={"bold"}>{`${completed}%`}</Label>
        </Filler>
      </BarContainer>
    </>
  );
};

export default ProgressBar;
