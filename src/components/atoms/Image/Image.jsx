import { StyledImage, Container } from "./ImageStyles";
import ImageText from "../ImageText/ImageText";

const Image = (props) => {
  return (
    <Container>
      <StyledImage {...props} />
      <ImageText primary={props.primary} secondary={props.secondary} />
    </Container>
  );
};
export default Image;
