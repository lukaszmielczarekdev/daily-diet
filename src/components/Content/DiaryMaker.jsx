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
import { calculateMacroPercentage } from "../../utils/calculators";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import Summary from "../Elements/Summary/Summary";

const DiaryMaker = (props) => {
  const userData = useContext(UserDataContext);
  const [dailyKcal, setDailyCalories] = useState(userData.userData.bmr);
  const [demand, setDemand] = useState(userData.userData.demand);

  const {
    register: registerCaloriesChange,
    handleSubmit: handleSubmitCaloriesChange,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      kcal: 0,
    },
  });

  const calculatePercentage = (number1, number2) => {
    return ((number1 / number2) * 100).toFixed(2);
  };

  const demandData = [
    {
      label: "kcal",
      bgcolor: "#ac2210",
      completed: calculatePercentage(props.diaryTotalMacros.kcal, dailyKcal),
    },
    {
      label: "protein",
      bgcolor: "#00695c",
      completed: calculatePercentage(
        props.diaryTotalMacros.protein,
        demand.protein
      ),
    },
    {
      label: "carbs",
      bgcolor: "#ef6c00",
      completed: calculatePercentage(
        props.diaryTotalMacros.carbs,
        demand.carbs
      ),
    },
    {
      label: "fat",
      bgcolor: "#1cef00",
      completed: calculatePercentage(props.diaryTotalMacros.fat, demand.fat),
    },
  ];

  const [demandCompleted, setDemandCompleted] = useState(demandData);

  useEffect(() => {
    setDemand(
      calculateMacroPercentage(
        dailyKcal,
        userData.userData.demandPercentage.protein,
        userData.userData.demandPercentage.carbs,
        userData.userData.demandPercentage.fat
      )
    );
    setDemandCompleted([
      {
        label: "kcal",
        bgcolor: "#ac2210",
        completed: calculatePercentage(props.diaryTotalMacros.kcal, dailyKcal),
      },
      {
        label: "protein",
        bgcolor: "#00695c",
        completed: calculatePercentage(
          props.diaryTotalMacros.protein,
          demand.protein
        ),
      },
      {
        label: "carbs",
        bgcolor: "#ef6c00",
        completed: calculatePercentage(
          props.diaryTotalMacros.carbs,
          demand.carbs
        ),
      },
      {
        label: "fat",
        bgcolor: "#1cef00",
        completed: calculatePercentage(props.diaryTotalMacros.fat, demand.fat),
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dailyKcal,
    props.diaryTotalMacros.kcal,
    props.diaryTotalMacros.protein,
    props.diaryTotalMacros.carbs,
    props.diaryTotalMacros.fat,
  ]);

  const resetSelected = () => {
    return document.getElementById("diary-name").value &&
      document.getElementById("caloric-adjustment").value &&
      dailyKcal > 0
      ? props.clean([])
      : "";
  };

  const calculateCalories = (data) => {
    console.log(userData.userData.bmr + parseInt(data.kcal));
    const calories = userData.userData.bmr + parseInt(data.kcal);
    setDailyCalories((prevState) => (prevState = calories));
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
            <StyledSpan>Caloric demand:&nbsp;{dailyKcal}</StyledSpan>
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
            {demandCompleted.map((item, idx) => (
              <ProgressBar
                key={idx}
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
                userData.saveDiary(props.selectedMeals, dailyKcal);
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
