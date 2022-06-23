import {
  Wrapper,
  InfoContainer,
  IconContainer,
  Header,
  Span,
} from "./MenuItemStyles";
import Description from "../../atoms/Description/Description";

const MenuItem = ({
  primary,
  secondary,
  description,
  color,
  icon,
  onClick,
  active,
}) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      <IconContainer color={color}>{icon}</IconContainer>
      <InfoContainer>
        <Span>{primary}</Span>
        <Header>{secondary}</Header>
        <Description thinText smallText>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default MenuItem;
