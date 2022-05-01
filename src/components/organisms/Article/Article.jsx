import { Wrapper, InnerContainer } from "./ArticleStyles";

const Article = ({ id, backgroundLeft, backgroundRight, left, right }) => {
  return (
    <Wrapper id={id}>
      <InnerContainer backgroundLeft={backgroundLeft}>{left}</InnerContainer>
      <InnerContainer backgroundRight={backgroundRight}>{right}</InnerContainer>
    </Wrapper>
  );
};
export default Article;
