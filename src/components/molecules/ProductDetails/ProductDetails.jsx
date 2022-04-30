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
        <StyledImage src={image} width={"180px"} />
      </ImageContainer>
      <InfoContainer>
        <Span>{primary}</Span>
        <Header>{secondary}</Header>
        <Description>{description}</Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default ProductDetails;
