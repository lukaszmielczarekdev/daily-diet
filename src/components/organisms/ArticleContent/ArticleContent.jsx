import Description from "../../atoms/Description/Description";
import Title from "../../atoms/Title/Title";

const ArticleContent = ({
  titlePrimary,
  titleSecondary,
  description,
  children,
  text,
  smallText,
  marginBottom,
}) => {
  return (
    <>
      <Title
        titlePrimary={titlePrimary}
        titleSecondary={titleSecondary}
        text={text}
        small={smallText}
      />
      {description && (
        <Description
          thinText
          smallText={smallText}
          text={text}
          marginBottom={marginBottom}
        >
          {description}
        </Description>
      )}
      {children}
    </>
  );
};

export default ArticleContent;
