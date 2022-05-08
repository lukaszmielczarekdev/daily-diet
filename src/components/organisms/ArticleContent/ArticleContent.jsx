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
        small={smallText}
      />
      <Description thinText smallText={smallText} text={text}>
        {description}
      </Description>
      {children}
    </>
  );
};

export default ArticleContent;
