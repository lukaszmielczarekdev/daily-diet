import { Wrapper, InnerContainer } from "./ArticleStyles";

const Article = ({
  id,
  padding,
  backgroundLeft,
  backgroundRight,
  left,
  right,
}) => {
  return (
    <Wrapper id={id} padding={padding}>
      <InnerContainer backgroundLeft={backgroundLeft}>{left}</InnerContainer>
      <InnerContainer backgroundRight={backgroundRight}>{right}</InnerContainer>
    </Wrapper>
  );
};
export default Article;
