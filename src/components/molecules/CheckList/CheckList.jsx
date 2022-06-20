import {
  Container,
  List,
  ListItem,
  ChildrenContainer,
} from "./CheckListStyles";
import { BsCheck } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const CheckList = ({
  data,
  color,
  smallText,
  element,
  justify,
  margin,
  padding,
  horizontal,
  text,
  children,
  arrow,
  align,
}) => {
  return (
    <Container
      margin={margin}
      padding={padding}
      horizontal={horizontal}
      text={text}
      align={align}
    >
      <ChildrenContainer>{children}</ChildrenContainer>
      <List>
        {data.map((elem, index) => (
          <ListItem key={index} smallText={smallText} justify={justify}>
            {arrow ? (
              <MdKeyboardArrowRight color={color} fontSize={"1.5rem"} />
            ) : (
              <BsCheck color={color} fontSize={"1.5rem"} />
            )}
            {elem[element]}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
export default CheckList;
