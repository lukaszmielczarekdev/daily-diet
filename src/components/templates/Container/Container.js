import { Section, Background, ContentContainer } from "./ContainerStyles";
import SectionDivider from "../../atoms/SectionDivider/SectionDivider";

const Container = (props) => {
  return (
    <SectionDivider {...props}>
      <Background {...props}>
        <Section {...props}>
          <ContentContainer {...props}>{props.children}</ContentContainer>
        </Section>
      </Background>
    </SectionDivider>
  );
};

export default Container;
