import React from "react";
import {
  Section,
  SectionInnerContainer,
  Link,
} from "../../styles/globalComponentsStyles";
import { Background } from "./UserProfileStyles";

const UserProfile = () => {
  return (
    <Background>
      <Section>
        <SectionInnerContainer>
          Your Profile
          <Link to="/builder">New diary</Link>
        </SectionInnerContainer>
      </Section>
    </Background>
  );
};

export default UserProfile;
