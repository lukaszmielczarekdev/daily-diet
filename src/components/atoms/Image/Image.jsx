import { StyledImage, Container } from "./ImageStyles";
import ImageText from "../ImageText/ImageText";

const Image = (props) => {
  return (
    <Container justify={props.justify}>
      <StyledImage {...props} />
      <ImageText
        primary={props.primary}
        secondary={props.secondary}
        text={props.text}
        left={props.left}
        right={props.right}
      />
    </Container>
  );
};
export default Image;
