import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import {
  Section,
  SectionInnerContainer,
} from "../../styles/globalComponentsStyles";
import { Background } from "./UserProfileStyles";

const UserProfile = (props) => {
  const userData = useContext(UserDataContext);

  return (
    <Background>
      <Section>
        <SectionInnerContainer>
          Your Profile
          {userData.userData.bmr === 0 &&
            "Complete your profile info to calculate your BMI."}
          {userData.userData.bmr !== 0 && `BMR = ${userData.userData.bmr}`}
        </SectionInnerContainer>
      </Section>
    </Background>
  );
};

export default UserProfile;
