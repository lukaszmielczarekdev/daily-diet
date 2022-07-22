import { Wrapper, InnerContainer, Container } from "./ArticleStyles";

const Article = ({
  id,
  padding,
  backgroundLeft,
  backgroundRight,
  left,
  right,
  children,
  alignSelfRightColumn,
  alignSelfLeftColumn,
}) => {
  return (
    <Container padding={padding}>
      <Wrapper id={id}>
        <InnerContainer
          backgroundLeft={backgroundLeft}
          alignSelfLeftColumn={alignSelfLeftColumn}
        >
          {left}
        </InnerContainer>

        <InnerContainer
          backgroundRight={backgroundRight}
          alignSelfRightColumn={alignSelfRightColumn}
        >
          {right}
        </InnerContainer>
      </Wrapper>
      {children}
    </Container>
  );
};
export default Article;
