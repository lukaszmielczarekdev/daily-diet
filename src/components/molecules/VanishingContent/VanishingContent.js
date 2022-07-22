import { Container } from "./VanishingContentStyles";

export const VanishingContent = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
