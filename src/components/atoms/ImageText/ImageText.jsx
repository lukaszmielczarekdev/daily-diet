import { StyledTitle, TitleSpan } from "./ImageTextStyles";

const ImageText = ({ primary, secondary, color, left, right }) => {
  return (
    <StyledTitle color={color} left={left} right={right}>
      <TitleSpan color={color} right={right}>
        {primary}
      </TitleSpan>
      {secondary}
    </StyledTitle>
  );
};
export default ImageText;
