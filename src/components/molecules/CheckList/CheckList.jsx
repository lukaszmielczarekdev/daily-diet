import { Container, List, ListItem } from "./CheckListStyles";
import { BsCheck } from "react-icons/bs";

const CheckList = ({ data, color, smallText, element }) => {
  return (
    <Container>
      <List>
        {data.map((elem) => (
          <ListItem key={elem.id} smallText={smallText}>
            <BsCheck color={color} fontSize={"1.5rem"} />
            {elem[element]}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
export default CheckList;
