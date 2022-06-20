import { Wrapper, InfoContainer, Header } from "./Card4Styles";
import Description from "../../atoms/Description/Description";

const Card4 = ({ header, description, fillColor, main, footer, onClick }) => {
  return (
    <Wrapper>
      <InfoContainer fillColor={fillColor} onClick={onClick}>
        <Header>{header}</Header>
        <Description thinText smallText marginBottom={"0"} text={"center"}>
          {description}
        </Description>
        {main}
        {footer}
      </InfoContainer>
    </Wrapper>
  );
};
export default Card4;
