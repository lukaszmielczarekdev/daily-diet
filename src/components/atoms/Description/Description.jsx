import { Text } from "./DescriptionStyles";

const Description = (props) => {
  return <Text {...props}>{props.children}</Text>;
};
export default Description;
