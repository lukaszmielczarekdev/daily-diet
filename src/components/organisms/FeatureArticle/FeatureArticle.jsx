import { Wrapper, Container } from "./FeatureArticleStyles";
import Anchor from "../../atoms/Anchor/Anchor";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import { useSelector } from "react-redux";

const FeatureArticle = ({
  titleSecondary,
  titlePrimary,
  description,
  link,
  altLink,
  image,
  alt,
  padding,
  margin,
}) => {
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <Wrapper padding={padding} margin={margin}>
      <Container>
        <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
        <Description>{description}</Description>
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
      </Container>
      <Container>
        <img alt={alt} src={image} width={"100%"} />
      </Container>
    </Wrapper>
  );
};
export default FeatureArticle;
