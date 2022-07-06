import { Wrapper, Container, Actions } from "./FeatureArticleStyles";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Image from "../../atoms/Image/Image";

const FeatureArticle = ({
  titleSecondary,
  titlePrimary,
  description,
  link,
  image,
  alt,
}) => {
  return (
    <Wrapper>
      <Container>
        <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
        <Description>{description}</Description>
        <Actions>
          <LinkItem
            add
            color={"white"}
            padding={"0.6rem"}
            margin={"0.5rem 0"}
            radius={"10px 0"}
            to={link}
            children={"Get started"}
            size={"1rem"}
          />
        </Actions>
      </Container>
      <Container>
        <Image alt={alt} src={image} width={"100%"} />
      </Container>
    </Wrapper>
  );
};
export default FeatureArticle;
