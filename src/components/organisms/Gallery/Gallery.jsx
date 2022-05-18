import { Wrapper, InnerContainer } from "./GalleryStyles";
import ArticleContent from "../ArticleContent/ArticleContent";

const Gallery = ({
  id,
  padding,
  background,
  children,
  titlePrimary,
  titleSecondary,
  description,
  text,
  justify,
  smallText,
}) => {
  return (
    <Wrapper id={id} padding={padding} text={text} justify={justify}>
      <InnerContainer background={background}>
        <ArticleContent
          text={text}
          titlePrimary={titlePrimary}
          titleSecondary={titleSecondary}
          description={description}
          children={children}
          smallText={smallText}
        />
      </InnerContainer>
    </Wrapper>
  );
};
export default Gallery;
