import Description from "../../atoms/Description/Description";
import Title from "../../atoms/Title/Title";
import { Wrapper } from "./TextFieldStyles";

const TextField = ({
  titlePrimary,
  titleSecondary,
  description,
  small,
  marginBottom,
  margin,
  children,
  padding,
  width,
}) => {
  return (
    <Wrapper padding={padding} width={width}>
      <Title
        titlePrimary={titlePrimary}
        titleSecondary={titleSecondary}
        small={small}
        margin={margin}
      />
      <Description thinText smallText={small} marginBottom={marginBottom}>
        {description}
      </Description>
      {children}
    </Wrapper>
  );
};

export default TextField;
