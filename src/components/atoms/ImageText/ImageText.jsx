import { StyledTitle, TitleSpan } from "./ImageTextStyles";

const ImageText = ({ primary, secondary }) => {
  return (
    <StyledTitle>
      <TitleSpan>{primary}</TitleSpan>
      {secondary}
    </StyledTitle>
  );
};
export default ImageText;
