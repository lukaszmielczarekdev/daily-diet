import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import { Section, SectionTitle } from "../../styles/globalComponentsStyles";
import {
  SectionInnerContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./PreferencesStyles";

const Preferences = (props) => {
  const userData = useContext(UserDataContext);

  const {
    register: registerBMI,
    handleSubmit: handleSubmitBMI,
    // formState: { errors },
  } = useForm();

  const {
    register: registerName,
    handleSubmit: handleSubmitName,
    // formState: { errors },
  } = useForm({ mode: "all" });

  const {
    register: registerAge,
    handleSubmit: handleSubmitAge,
    // formState: { errors },
  } = useForm({ mode: "all" });
  const {
    register: registerGender,
    handleSubmit: handleSubmitGender,
    // formState: { errors },
  } = useForm();

  const calculateBMI = (data) => {
    const heightInMeters = Number(data.height) / 100;
    const BMI = (Number(data.weight) / heightInMeters ** 2).toFixed(2);
    userData.setUserInfo({ bmi: BMI, ...data });
  };

  const saveUserData = (data) => {
    userData.setUserInfo(data);
  };

  const setValue = (value) => {
    console.log(userData.userData[value]);
    return userData.userData[value] ? userData.userData[value] : "...";
  };

  return (
    <Section>
      <SectionInnerContainer>
        <SectionTitle>Preferences</SectionTitle>
        <hr />
        <br />
        <StyledForm onSubmit={handleSubmitName(saveUserData)}>
          <StyledLabel>
            Name:
            <StyledInput
              text
              type="text"
              placeholder={setValue("name")}
              {...registerName("name", {
                onBlur: (e) => {
                  e.preventDefault();
                  handleSubmitName(saveUserData({ name: e.target.value }));
                },
                required: true,
                maxLength: 15,
                pattern: /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/i,
              })}
            />
          </StyledLabel>
          {/* <input type="submit" value="Save" /> */}
        </StyledForm>
        <StyledForm onSubmit={handleSubmitAge(saveUserData)}>
          <StyledLabel>
            Age:
            <StyledInput
              type="number"
              placeholder={setValue("age")}
              {...registerAge("age", {
                onBlur: (e) => {
                  e.preventDefault();
                  handleSubmitName(saveUserData({ age: e.target.value }));
                },
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
          </StyledLabel>
        </StyledForm>
        <StyledForm onChange={handleSubmitGender(saveUserData)}>
          <StyledLabel>
            Gender:
            <StyledSelect
              {...registerGender("gender", {
                onChange: (e) => {
                  e.preventDefault();
                  handleSubmitName(saveUserData({ gender: e.target.value }));
                },
                required: true,
              })}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </StyledSelect>
          </StyledLabel>
        </StyledForm>
        <br />
        <hr />
        <br />
        <StyledForm onSubmit={handleSubmitBMI(calculateBMI)}>
          <StyledLabel>
            Height (cm)
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
            Weight (kg)
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
          <input type="submit" value="Save" />
        </StyledForm>
      </SectionInnerContainer>
    </Section>
  );
};

export default Preferences;
