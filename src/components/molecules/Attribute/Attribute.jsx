import { Container, Description, Icon, Span } from "./AttributeStyles";

const Attribute = ({ item }) => {
  return (
    <Container>
      <Icon>{item.icon}</Icon>
      <Description>
        <Span>{item.primary}</Span>
        {item.secondary}
      </Description>
    </Container>
  );
};

export default Attribute;
