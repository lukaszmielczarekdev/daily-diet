import { Wrapper, Description, Container } from "./ArticleStyles";
import Anchor from "../../atoms/Anchor/Anchor";
import Title from "../../atoms/Title/Title";
import { useSelector } from "react-redux";

const Article = ({
  title,
  description,
  link,
  altLink,
  image,
  padding,
  margin,
}) => {
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <Wrapper padding={padding} margin={margin}>
      <Container>
        <Title
          primary={title}
          secondary={"Care About Nutrition For Your Health"}
        />
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
        <img alt="pizza" src={image} width={"100%"} />
      </Container>
    </Wrapper>
  );
};
export default Article;
