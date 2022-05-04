import { StyledTitle, TitleSpan } from "./TitleStyles";

const Title = ({ titlePrimary, titleSecondary, text }) => {
  return (
    <StyledTitle text={text}>
      <TitleSpan text={text}>{titlePrimary}</TitleSpan>
      {titleSecondary}
    </StyledTitle>
  );
};
export default Title;
