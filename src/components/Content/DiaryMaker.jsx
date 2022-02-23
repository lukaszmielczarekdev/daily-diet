import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import {
  StyledForm,
  StyledTitle,
  ButtonContainer,
  ActionButton,
  StyledListItem,
  StyledList,
} from "../../styles/globalComponentsStyles";
import {
  DiaryContainer,
  ProgressBarsContainer,
  DiaryInput,
  StyledSpan,
} from "./DiaryMakerStyles";
import ProgressBar from "../Elements/ProgressBar/ProgressBar";
import {
  calculateMacroPercentage,
  calculatePercentage,
} from "../../utils/calculators";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import Summary from "../Elements/Summary/Summary";
import { progressBarsDataTemplate } from "../Elements/ProgressBar/ProgressBar";

const DiaryMaker = (props) => {
  const userData = useContext(UserDataContext);
  const [dailyDemand, setDailyDemand] = useState({
    kcal: userData.userData.bmr,
    ...userData.userData.demand,
  });
  const [progressBarsData, setProgressBarsData] = useState(
    progressBarsDataTemplate
  );

  useEffect(() => {
    calculateCaloriesPercentage(dailyDemand);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyDemand, props.diaryTotalMacros]);

  const {
    register: registerCaloriesChange,
    handleSubmit: handleSubmitCaloriesChange,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      kcal: 0,
    },
  });

  const resetSelected = () => {
    return document.getElementById("diary-name").value &&
      document.getElementById("caloric-adjustment").value &&
      dailyDemand
      ? props.clean([])
      : "";
  };

  const calculateCalories = (data) => {
    const calories = userData.userData.bmr + parseInt(data.kcal);
    const demand = calculateMacroPercentage(
      calories,
      userData.userData.demandPercentage.protein,
      userData.userData.demandPercentage.carbs,
      userData.userData.demandPercentage.fat
    );

    setDailyDemand((prevState) => (prevState = { ...demand }));
  };

  const calculateCaloriesPercentage = (data) => {
    const progressBarsDataCopy = { ...progressBarsData };

    for (let [key, value] of Object.entries(data)) {
      progressBarsDataCopy[key].completed = calculatePercentage(
        props.diaryTotalMacros[key],
        value
      );
    }
    setProgressBarsData((prevState) => (prevState = progressBarsDataCopy));
  };

  return (
    <>
      {props.selectedMeals.length !== 0 && (
        <DiaryContainer column id="diary">
          <DiaryInput
            text
            id={"diary-name"}
            type="text"
            placeholder={"Diary name (3 - 25 chars) *"}
          />
          <DiaryContainer>
            <StyledSpan>Caloric demand:&nbsp;{dailyDemand.kcal}</StyledSpan>
            <StyledForm
              onChange={handleSubmitCaloriesChange(calculateCalories)}
            >
              <DiaryInput
                id="caloric-adjustment"
                placeholder={"+ / - kcal *"}
                type="number"
                {...registerCaloriesChange("kcal", {
                  max: 5000,
                  min: -5000,
                  required: true,
                  maxLength: 5,
                  pattern: /\d+/,
                })}
              />
            </StyledForm>
          </DiaryContainer>
          <ProgressBarsContainer>
            {Object.values(progressBarsData).map((item, id) => (
              <ProgressBar
                key={id}
                label={item.label}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </ProgressBarsContainer>
          <StyledList>
            {props.selectedMeals.length !== 0 &&
              props.selectedMeals.map((meal, mealIndex) => (
                <React.Fragment key={meal.id}>
                  <StyledListItem>
                    <StyledTitle>{meal.name}</StyledTitle>
                    {meal.items.map((ingredient, ingIndex) => (
                      <ProductReadOnly
                        key={ingredient.id}
                        product={ingredient}
                        amount={ingredient.amount}
                      />
                    ))}
                  </StyledListItem>
                  <Summary data={meal.totalMacros} />
                </React.Fragment>
              ))}
          </StyledList>
          <ButtonContainer fit>
            <ActionButton
              save
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => {
                userData.saveDiary(props.selectedMeals, dailyDemand.kcal);
                resetSelected();
              }}
            >
              Save diary
            </ActionButton>
            <ActionButton
              delete
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => props.clean([])}
            >
              Delete
            </ActionButton>
          </ButtonContainer>
        </DiaryContainer>
      )}
    </>
  );
};

export default DiaryMaker;
