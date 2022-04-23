import { Wrapper, Description } from "./ArticleStyles";

const Article = ({ title, description, link, image }) => {
  return (
    <Wrapper>
      <div>
        <span>{title}</span>
        <Description>{description}</Description>
        <button>{link}</button>
      </div>
      <div>
        <img alt="pizza" src={image} width="80%" />
      </div>
    </Wrapper>
  );
};
export default Article;
