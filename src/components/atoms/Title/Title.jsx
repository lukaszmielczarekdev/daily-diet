import { StyledTitle, TitleSpan } from "./TitleStyles";

const Title = ({ titlePrimary, titleSecondary, text, small, margin }) => {
  return (
    <StyledTitle text={text} small={small} margin={margin}>
      <TitleSpan text={text} small={small}>
        {titlePrimary}
      </TitleSpan>
      {titleSecondary}
    </StyledTitle>
  );
};
export default Title;
