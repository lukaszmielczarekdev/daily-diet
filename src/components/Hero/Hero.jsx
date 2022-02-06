import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import { WelcomeSection, LinkButton, Img } from "./HeroStyles";
import lemon_logo from "../../assets/Images/lemon_logo.jpg";

const Hero = () => {
  return (
    <Section column hero>
      <WelcomeSection>
        <Img src={lemon_logo} />
        <SectionTitle main center>
          Daily Diet
        </SectionTitle>
        <SectionText high center main>
          Diary builder
        </SectionText>
        <LinkButton href={"#diarybuilder"}>Try for free.</LinkButton>
      </WelcomeSection>
    </Section>
  );
};

export default Hero;
