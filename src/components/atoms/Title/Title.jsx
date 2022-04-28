import { StyledTitle, TitleSpan } from "./TitleStyles";

const Title = ({ titlePrimary, titleSecondary }) => {
  return (
    <StyledTitle>
      <TitleSpan>{titlePrimary}</TitleSpan>
      {titleSecondary}
    </StyledTitle>
  );
};
export default Title;
