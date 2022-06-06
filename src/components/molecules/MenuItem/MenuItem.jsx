import {
  Wrapper,
  ImageContainer,
  InfoContainer,
  StyledImage,
  Header,
  Span,
} from "./MenuItemStyles";
import Description from "../../atoms/Description/Description";

const MenuItem = ({ primary, secondary, description, image }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      <InfoContainer>
        <Span>{primary}</Span>
        <Header>{secondary}</Header>
        <Description thinText smallText>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default MenuItem;
