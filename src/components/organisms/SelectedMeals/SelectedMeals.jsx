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
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import {
  calculateMacrosAmount,
  calculateMacrosPercentage,
  calculateMacrosForMeals,
} from "../../../utils/calculators";
import { useSelector, useDispatch } from "react-redux";
import { mealsRemoved, productsRemoved } from "../../../store/helpers";
import { createDiary, updateDiary } from "../../../store/diaries";
import ListOfMeals from "../../molecules/ListOfMeals/ListOfMeals";
import RoundChart from "../RoundChart/RoundChart";
import { v4 as uuidv4 } from "uuid";
import { notify } from "../../../store/utils";
import {
  currentItemSet,
  currentItemRemoved,
  editedMealsAdded,
} from "../../../store/helpers";

const SelectedMeals = ({ margin, editMode }) => {
  const dispatch = useDispatch();
  const diaryTitle = useRef();

  const { bmr, demandAmount, demandPercentage } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : {
          bmr: 0,
          demandAmount: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
          demandPercentage: { protein: 0, carbs: 0, fat: 0 },
        }
  );

  const { temporaryMeals, currentItemBackup } = useSelector(
    (state) => state.user.helpers
  );

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
    calculateMacrosPercentage(currentDiaryDemand, currentMacrosAmount)
  );

  useEffect(() => {
    const macros = calculateMacrosForMeals(temporaryMeals);
    setCurrentMacrosAmount((prevState) => (prevState = macros));
  }, [temporaryMeals]);

  useEffect(() => {
    const percentage = calculateMacrosPercentage(
      currentDiaryDemand,
      currentMacrosAmount
    );

    setProgressData((prevState) => (prevState = percentage));
  }, [currentDiaryDemand, currentMacrosAmount]);

  const calculateCurrentDiaryDemand = ({ kcal }) => {
    if (!kcal) kcal = 0;
    if (kcal <= 5000 && kcal >= -5000) {
      const calories = demandAmount.kcal + parseInt(kcal);
      const amount = calculateMacrosAmount(
        calories,
        demandPercentage.protein,
        demandPercentage.carbs,
        demandPercentage.fat
      );

      setCurrentDiaryDemand((prevState) => (prevState = { ...amount }));
    } else {
      notify("Maximum adjustment is 5000 kcal");
    }
  };

  const resetBuilder = () => {
    reset();
    setCurrentDiaryDemand((prevState) => (prevState = { ...demandAmount }));
  };

  const handleCreateDiary = () => {
    const title = diaryTitle.current.value.trim();

    if (
      title &&
      title.length >= 3 &&
      title.length <= 25 &&
      currentDiaryDemand.kcal > 0 &&
      temporaryMeals.length !== 0
    ) {
      dispatch(
        createDiary({
          id: uuidv4(),
          title: diaryTitle.current.value,
          meals: temporaryMeals,
          nutrients: currentMacrosAmount,
          calorieAdjustment: currentDiaryDemand.kcal - bmr,
        })
      );

      dispatch(mealsRemoved());
      dispatch(productsRemoved());
      resetBuilder();
    } else {
      notify("Something is missing");
    }
  };

  const handleUpdateDiary = () => {
    const title = diaryTitle.current.value.trim();

    if (
      title &&
      title.length >= 3 &&
      title.length <= 25 &&
      currentDiaryDemand.kcal > 0 &&
      temporaryMeals.length !== 0
    ) {
      dispatch(
        updateDiary({
          id: currentItemBackup._id,
          diary: {
            id: currentItemBackup.id,
            title: diaryTitle.current.value,
            meals: temporaryMeals,
            nutrients: currentMacrosAmount,
            calorieAdjustment: currentDiaryDemand.kcal - bmr,
          },
        })
      );

      dispatch(mealsRemoved());
      dispatch(productsRemoved());
      dispatch(currentItemRemoved());
      resetBuilder();
    } else {
      notify("Something is missing");
    }
  };

  return (
    <>
      <Container column margin={margin}>
        <ProgressBarsContainer>
          {Object.keys(progressData).map((key, id) => (
            <RoundChart
              data={[progressData[key]]}
              label={key}
              size={"50%"}
              nameSize={"8px"}
              valueSize={"12px"}
              offset={-4}
              ringSize={"60%"}
              key={id}
            />
          ))}
        </ProgressBarsContainer>
        <DiaryInput
          text
          ref={diaryTitle}
          type="text"
          placeholder={"Diary title (3 - 25 length)"}
        />
        <Header>
          <StyledForm
            onChange={handleSubmitCaloriesChange(calculateCurrentDiaryDemand)}
            onSubmit={handleSubmitCaloriesChange(calculateCurrentDiaryDemand)}
          >
            <DiaryInput
              id="caloric-adjustment"
              placeholder={"+ - kcal"}
              type="number"
              defaultValue={currentDiaryDemand.calorieAdjustment}
              {...registerCaloriesChange("kcal", {
                valueAsNumber: true,
                pattern: /\d+/,
              })}
            />
          </StyledForm>
          <StyledSpan>Demand:&nbsp;{currentDiaryDemand.kcal} kcal</StyledSpan>
        </Header>
        <ListOfMeals meals={temporaryMeals} />
        <ControlPanel border justify={"left"} padding={"1rem 0 0 0"}>
          <Button
            add
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => {
              editMode ? handleUpdateDiary() : handleCreateDiary();
            }}
          >
            {editMode ? "Update" : "Save"}
          </Button>
          {editMode && (
            <Button
              save
              color={"black"}
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => {
                dispatch(editedMealsAdded({ meals: currentItemBackup.meals }));
                dispatch(
                  currentItemSet({
                    item: currentItemBackup,
                    type: "diary",
                  })
                );
              }}
            >
              Reset
            </Button>
          )}
          <Button
            remove
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => {
              dispatch(mealsRemoved());
            }}
          >
            Delete all
          </Button>
        </ControlPanel>
        {editMode && (
          <Button
            color={"black"}
            margin={"1.5rem 0 0 0"}
            align={"center"}
            onClick={() => {
              dispatch(currentItemRemoved());
            }}
          >
            Close
          </Button>
        )}
      </Container>
    </>
  );
};

export default SelectedMeals;
