import { Container } from "./ControlPanelStyles";

export const ControlPanel = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
