import { Wrapper, Container } from "./ArticleStyles";

const Article = ({ left, right, padding, margin, columns }) => {
  return (
    <Wrapper padding={padding} margin={margin} columns={columns}>
      <Container>{left}</Container>
      <Container>{right}</Container>
    </Wrapper>
  );
};
export default Article;
