import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import { Section } from "../../styles/globalComponentsStyles";

const UserProfile = (props) => {
  const userData = useContext(UserDataContext);

  return (
    <Section>
      Your Profile
      <br />
      <br />
      {userData.userData.bmi === 0 &&
        "Complete your profile info to calculate your BMI."}
      {userData.userData.bmi !== 0 && `BMI = ${userData.userData.bmi}`}
    </Section>
  );
};

export default UserProfile;
