import { Wrapper, IconContainer, InfoContainer, Header } from "./CardStyles";
import Description from "../../atoms/Description/Description";

const Card = ({ header, description, icon, color, fillColor }) => {
  return (
    <Wrapper>
      <IconContainer color={color}>{icon}</IconContainer>
      <InfoContainer fillColor={fillColor}>
        <Header>{header}</Header>
        <Description thinText smallText marginBottom={"0"}>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default Card;
