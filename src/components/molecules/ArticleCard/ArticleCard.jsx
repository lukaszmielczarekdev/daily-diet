import {
  Wrapper,
  ImageContainer,
  StyledImage,
  InfoContainer,
  Header,
} from "./ArticleCardStyles";
import Description from "../../atoms/Description/Description";

const ArticleCard = ({ title, description, image }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <StyledImage src={image} />
      </ImageContainer>
      <InfoContainer>
        <Header>{title}</Header>
        <Description marginBottom={"0"} text={"left"} thinText>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default ArticleCard;
