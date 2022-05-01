import Description from "../../atoms/Description/Description";
import Title from "../../atoms/Title/Title";

const ArticleContent = ({
  titlePrimary,
  titleSecondary,
  description,
  children,
}) => {
  return (
    <>
      <Title titlePrimary={titlePrimary} titleSecondary={titleSecondary} />
      <Description>{description}</Description>
      {children}
    </>
  );
};

export default ArticleContent;
