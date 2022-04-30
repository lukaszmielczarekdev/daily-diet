import { StyledTitle, TitleSpan } from "./ImageTextStyles";

const ImageText = ({ primary, secondary, color }) => {
  return (
    <StyledTitle color={color}>
      <TitleSpan color={color}>{primary}</TitleSpan>
      {secondary}
    </StyledTitle>
  );
};
export default ImageText;
