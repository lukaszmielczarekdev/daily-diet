import { StyledTitle, TitleSpan } from "./TitleStyles";

const Title = ({ primary, secondary }) => {
  return (
    <StyledTitle>
      <TitleSpan>{primary}</TitleSpan>
      {secondary}
    </StyledTitle>
  );
};
export default Title;
