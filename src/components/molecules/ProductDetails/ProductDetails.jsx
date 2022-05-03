import {
  Wrapper,
  ImageContainer,
  InfoContainer,
  StyledImage,
  Header,
  Span,
} from "./ProductDetailsStyles";
import Description from "../../atoms/Description/Description";

const ProductDetails = ({ primary, secondary, description, image }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      <InfoContainer>
        <Span>{primary}</Span>
        <Header>{secondary}</Header>
        <Description marginBottom={"0"}>{description}</Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default ProductDetails;
