import Description from "../../atoms/Description/Description";
import Title from "../../atoms/Title/Title";

const ArticleContent = ({
  titlePrimary,
  titleSecondary,
  description,
  children,
  text,
  smallText,
}) => {
  return (
    <>
      <Title
        titlePrimary={titlePrimary}
        titleSecondary={titleSecondary}
        text={text}
      />
      <Description smallText={smallText} text={text}>
        {description}
      </Description>
      {children}
    </>
  );
};

export default ArticleContent;
