import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import { Section, SectionTitle } from "../../styles/globalComponentsStyles";
import {
  SectionInnerContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./PreferencesStyles";

const Preferences = (props) => {
  const userData = useContext(UserDataContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const calculateBMI = (data) => {
    const heightInMeters = Number(data.height) / 100;
    const BMI = (Number(data.weight) / heightInMeters ** 2).toFixed(2);
    userData.setUserInfo("bmi", BMI);
  };

  return (
    <Section>
      <SectionInnerContainer>
        <SectionTitle>Preferences</SectionTitle>
        <hr />
        <br />
        <StyledForm onSubmit={handleSubmit(calculateBMI)}>
          <StyledLabel>
            Height (cm)
            <StyledInput
              {...register("height", { required: true, pattern: /\d+/ })}
            />
          </StyledLabel>
          <StyledLabel>
            Weight
            <StyledInput
              {...register("weight", { required: true, pattern: /\d+/ })}
            />
          </StyledLabel>
          <input type="submit" />
        </StyledForm>
      </SectionInnerContainer>
    </Section>
  );
};

export default Preferences;
