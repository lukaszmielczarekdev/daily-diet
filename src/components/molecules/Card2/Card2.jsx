import { Wrapper, IconContainer, InfoContainer, Header } from "./Card2Styles";
import Description from "../../atoms/Description/Description";

const Card2 = ({ header, description, icon, color, fillColor }) => {
  return (
    <Wrapper>
      <IconContainer color={color}>{icon}</IconContainer>
      <InfoContainer fillColor={fillColor}>
        <Header>{header}</Header>
        <Description thinText smallText marginBottom={"0"} text={"center"}>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
};
export default Card2;
