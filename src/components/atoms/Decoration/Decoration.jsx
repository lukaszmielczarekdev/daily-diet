import { StyledImage, Container } from "./DecorationStyles";

const Decoration = (props) => {
  return (
    <Container>
      <StyledImage {...props} />
    </Container>
  );
};
export default Decoration;
