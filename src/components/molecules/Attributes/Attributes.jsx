import { Container } from "./AttributesStyles.js";
import Attribute from "../Attribute/Attribute.jsx";

const Attributes = ({ items, smallScreen }) => {
  return (
    <Container smallScreen={smallScreen}>
      {items.map((item) => (
        <Attribute key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Attributes;
