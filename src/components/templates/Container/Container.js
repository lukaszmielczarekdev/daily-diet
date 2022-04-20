import { Section, Background, ContentContainer } from "./ContainerStyles";

const Container = (props) => {
  return (
    <Background {...props}>
      <Section {...props}>
        <ContentContainer {...props}>{props.children}</ContentContainer>
      </Section>
    </Background>
  );
};

export default Container;
