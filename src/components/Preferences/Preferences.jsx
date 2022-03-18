import React from "react";

import {
  Section,
  SectionInnerContainer,
  SectionTitle,
} from "../../styles/globalComponentsStyles";
import { Background } from "./PreferencesStyles";

const Preferences = (props) => {
  return (
    <Background>
      <Section>
        <SectionInnerContainer>
          <SectionTitle>Preferences</SectionTitle>
        </SectionInnerContainer>
      </Section>
    </Background>
  );
};

export default Preferences;
