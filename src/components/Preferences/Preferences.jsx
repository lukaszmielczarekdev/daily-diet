import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import {
  Section,
  SectionInnerContainer,
  SectionTitle,
  Button,
  StyledInput,
  StyledSelect,
  StyledForm,
  StyledLabel,
} from "../../styles/globalComponentsStyles";

const Preferences = (props) => {
  const userData = useContext(UserDataContext);

  const {
    register: registerBMR,
    handleSubmit: handleSubmitBMR,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      height: userData.userData.height,
      weight: userData.userData.weight,
      age: userData.userData.age,
    },
  });

  const calculateBMR = (data) => {
    const dataCopy = { ...data };
    dataCopy.height = parseInt(data.height);
    dataCopy.weight = parseInt(data.weight);
    dataCopy.age = parseInt(data.age);

    const BMR = parseInt(
      (
        (9.99 * dataCopy.weight +
          6.25 * dataCopy.height -
          (4, 9 * dataCopy.age) +
          5) *
        dataCopy.activity
      ).toFixed(0)
    );
    userData.setUserInfo({ bmr: BMR, ...dataCopy });
  };

  return (
    <Section>
      <SectionInnerContainer>
        <SectionTitle>Preferences</SectionTitle>
        <hr />
        <br />
        <br />
        <StyledForm onSubmit={handleSubmitBMR(calculateBMR)}>
          <StyledLabel>
            Height(cm):
            <StyledInput
              type="number"
              {...registerBMR("height", {
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
              {...registerBMR("weight", {
                max: 500,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
          </StyledLabel>
          <StyledLabel>
            Age:
            <StyledInput
              type="number"
              {...registerBMR("age", {
                max: 110,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
          </StyledLabel>
          <StyledLabel>
            Activity:
            <StyledSelect
              {...registerBMR("activity", {
                required: true,
              })}
            >
              <option value={1.5}>Low</option>
              <option value={2}>Medium</option>
              <option value={2.5}>High</option>
            </StyledSelect>
          </StyledLabel>
          <Button type="submit">Calculate BMR</Button>
        </StyledForm>
      </SectionInnerContainer>
    </Section>
  );
};

export default Preferences;
