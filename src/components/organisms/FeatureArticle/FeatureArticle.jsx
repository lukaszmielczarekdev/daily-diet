import { Wrapper, Container, Actions } from "./FeatureArticleStyles";
import Anchor from "../../atoms/Anchor/Anchor";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import { useSelector } from "react-redux";
import Image from "../../atoms/Image/Image";

const FeatureArticle = ({
  titleSecondary,
  titlePrimary,
  description,
  link,
  altLink,
  image,
  alt,
}) => {
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <Wrapper>
      <Container>
        <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
        <Description>{description}</Description>
        <Actions>
          <Anchor
            href={!bmr ? link : altLink}
            color={"black"}
            green
            width={"fit-content"}
          >
            Get Started.
          </Anchor>
          <Anchor
            href={!bmr ? link : altLink}
            color={"black"}
            yellow
            width={"fit-content"}
          >
            Learn more.
          </Anchor>
        </Actions>
      </Container>
      <Container>
        <Image alt={alt} src={image} width={"100%"} />
      </Container>
    </Wrapper>
  );
};
export default FeatureArticle;
