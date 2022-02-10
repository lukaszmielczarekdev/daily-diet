import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import {
  Section,
  SectionTitle,
  Button,
} from "../../styles/globalComponentsStyles";
import {
  SectionInnerContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./PreferencesStyles";

const Preferences = (props) => {
  const userData = useContext(UserDataContext);

  const {
    register: registerBMI,
    handleSubmit: handleSubmitBMI,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height: userData.userData.height,
      weight: userData.userData.weight,
    },
  });

  const calculateBMI = (data) => {
    const dataCopy = { ...data };
    dataCopy.height = parseInt(data.height);
    dataCopy.weight = parseInt(data.weight);

    const heightInMeters = dataCopy.height / 100;
    const BMI = (dataCopy.weight / heightInMeters ** 2).toFixed(2);
    userData.setUserInfo({ bmi: BMI, ...dataCopy });
  };

  return (
    <Section>
      <SectionInnerContainer>
        <SectionTitle>Preferences</SectionTitle>
        <hr />
        <br />

        <br />
        <StyledForm onSubmit={handleSubmitBMI(calculateBMI)}>
          <StyledLabel>
            Height(cm):
            <StyledInput
              type="number"
              {...registerBMI("height", {
                max: 250,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
          </StyledLabel>
          <StyledLabel>
            Weight(kg):
            <StyledInput
              type="number"
              {...registerBMI("weight", {
                max: 500,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
          </StyledLabel>
          <Button type="submit">Calculate BMI</Button>
        </StyledForm>
      </SectionInnerContainer>
    </Section>
  );
};

export default Preferences;
