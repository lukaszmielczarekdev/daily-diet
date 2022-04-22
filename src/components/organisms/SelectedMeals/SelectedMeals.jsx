import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "../../../styles/globalComponentsStyles";
import {
  Container,
  Header,
  ProgressBarsContainer,
  DiaryInput,
  StyledSpan,
} from "./SelectedMealsStyles";
import ProgressBar, {
  progressBarsDataTemplate,
} from "../ProgressBar/ProgressBar";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import {
  calculateMacrosAmount,
  calculateMacrosPercentage,
  calculateMacrosForMeals,
} from "../../../utils/calculators";
import { useSelector, useDispatch } from "react-redux";
import { diaryAdded, mealsRemoved } from "../../../store/userItems";
import ListOfMeals from "../../molecules/ListOfMeals/ListOfMeals";

const SelectedMeals = () => {
  const dispatch = useDispatch();
  const diaryName = useRef();

  const { demandAmount, demandPercentage } = useSelector(
    (state) => state.user.userProfile
  );
  const { temporaryMeals } = useSelector((state) => state.user.userItems);

  const [currentDiaryDemand, setCurrentDiaryDemand] = useState({
    ...demandAmount,
  });

  const [currentMacrosAmount, setCurrentMacrosAmount] = useState(
    calculateMacrosForMeals(temporaryMeals)
  );

  const {
    register: registerCaloriesChange,
    handleSubmit: handleSubmitCaloriesChange,
    reset,
    // formState: { errors },
  } = useForm();

  const [progressData, setProgressData] = useState(
    calculateMacrosPercentage(
      currentDiaryDemand,
      currentMacrosAmount,
      progressBarsDataTemplate
    )
  );

  useEffect(() => {
    const macros = calculateMacrosForMeals(temporaryMeals);
    setCurrentMacrosAmount((prevState) => (prevState = macros));
  }, [temporaryMeals]);

  useEffect(() => {
    const percentage = calculateMacrosPercentage(
      currentDiaryDemand,
      currentMacrosAmount,
      progressBarsDataTemplate
    );

    setProgressData((prevState) => (prevState = percentage));
  }, [currentDiaryDemand, currentMacrosAmount]);

  const calculateCurrentDiaryDemand = ({ kcal }) => {
    const calories = demandAmount.kcal + parseInt(kcal);
    const amount = calculateMacrosAmount(
      calories,
      demandPercentage.protein,
      demandPercentage.carbs,
      demandPercentage.fat
    );

    setCurrentDiaryDemand((prevState) => (prevState = { ...amount }));
  };

  const resetBuilder = () => {
    reset();
    setCurrentDiaryDemand((prevState) => (prevState = { ...demandAmount }));
  };

  return (
    <>
      {temporaryMeals.length !== 0 && (
        <Container column>
          <DiaryInput
            text
            ref={diaryName}
            type="text"
            placeholder={"Diary name (3 - 25 chars)"}
          />
          <Header>
            <StyledSpan>Demand:&nbsp;{currentDiaryDemand.kcal} kcal</StyledSpan>
            <StyledForm
              onChange={handleSubmitCaloriesChange(calculateCurrentDiaryDemand)}
              onSubmit={handleSubmitCaloriesChange(calculateCurrentDiaryDemand)}
            >
              <DiaryInput
                id="caloric-adjustment"
                placeholder={"+ - kcal"}
                type="number"
                {...registerCaloriesChange("kcal", {
                  valueAsNumber: true,
                  max: 5000,
                  min: -5000,
                  required: true,
                  maxLength: 5,
                  pattern: /\d+/,
                })}
              />
            </StyledForm>
          </Header>
          <ProgressBarsContainer>
            {Object.values(progressData).map(
              ({ label, bgcolor, completed }, id) => (
                <ProgressBar
                  key={id}
                  label={label}
                  bgcolor={bgcolor}
                  completed={completed}
                />
              )
            )}
          </ProgressBarsContainer>
          <ListOfMeals meals={temporaryMeals} />
          <ControlPanel>
            <Button
              save
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => {
                dispatch(
                  diaryAdded({
                    demand: currentDiaryDemand,
                    demandCoverage: progressData,
                    nutrients: currentMacrosAmount,
                    meals: temporaryMeals,
                    name: diaryName.current.value,
                  })
                );
                resetBuilder();
              }}
            >
              Save
            </Button>
            <Button
              remove
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => {
                dispatch(mealsRemoved());
              }}
            >
              Delete
            </Button>
          </ControlPanel>
        </Container>
      )}
    </>
  );
};

export default SelectedMeals;
