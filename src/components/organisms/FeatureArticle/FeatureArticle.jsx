import { Wrapper, Container, Actions } from "./FeatureArticleStyles";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Image from "../../atoms/Image/Image";
import { useSelector } from "react-redux";

const FeatureArticle = ({
  titleSecondary,
  titlePrimary,
  description,
  link,
  altLink,
  image,
  alt,
}) => {
  const { currentUser } = useSelector((state) => state.user.authData);

  const renderLink = () => {
    if (!currentUser) return altLink;
    if (!currentUser.profile.bmr) return "/#calculator";
    return link;
  };

  return (
    <Wrapper>
      <Container>
        <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
        <Description>{description}</Description>
        <Actions>
          <LinkItem
            hash={1}
            add={1}
            color={"white"}
            padding={"0.8rem"}
            margin={"0.5rem 0"}
            radius={"10px 0"}
            to={renderLink()}
            children={"Get started"}
            size={"0.8rem"}
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
