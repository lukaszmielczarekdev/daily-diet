import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserDataContext from "../../contexts/UserDataContext";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Button,
} from "../../styles/globalComponentsStyles";
import ProgressBar from "../Elements/ProgressBar/ProgressBar";

const DiaryMaker = (props) => {
  const userData = useContext(UserDataContext);
  const [dailyCalories, setDailyCalories] = useState(userData.userData.bmr);
  const {
    register: registerCaloriesChange,
    handleSubmit: handleSubmitCaloriesChange,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      kcal: 0,
    },
  });

  const calculateDemandPercentage = (number1, number2) => {
    console.log(((number1 / number2) * 100).toFixed(2));
    return ((number1 / number2) * 100).toFixed(2);
  };

  const demandData = [
    {
      label: "kcal",
      bgcolor: "#ac2210",
      completed: calculateDemandPercentage(
        props.diaryTotalMacros.kcal,
        dailyCalories
      ),
    },
    { label: "protein", bgcolor: "#00695c", completed: 30 },
    { label: "carbs", bgcolor: "#ef6c00", completed: 53 },
    { label: "fat", bgcolor: "#1cef00", completed: 53 },
  ];

  const [demandCompleted, setDemandCompleted] = useState(demandData);

  useEffect(() => {
    setDemandCompleted([
      {
        label: "kcal",
        bgcolor: "#ac2210",
        completed: calculateDemandPercentage(
          props.diaryTotalMacros.kcal,
          dailyCalories
        ),
      },
      { label: "protein", bgcolor: "#00695c", completed: 30 },
      { label: "carbs", bgcolor: "#ef6c00", completed: 53 },
      { label: "fat", bgcolor: "#1cef00", completed: 53 },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyCalories, props.diaryTotalMacros.kcal]);

  const resetSelected = () => {
    return document.getElementById("diary-name").value ? props.clean([]) : "";
  };

  const calculateCalories = (data) => {
    const calories = userData.userData.bmr + parseInt(data.kcal);
    setDailyCalories((prevState) => (prevState = calories));
  };

  return (
    <>
      {props.selectedMeals.length !== 0 && (
        <div id="diary">
          <input id={"diary-name"} type="text" placeholder={"Diary name"} /> * -{" "}
          {new Date().toLocaleDateString()}
          <br />
          <ul id="diary-calory-header">
            <li>Calory demand:&nbsp;</li>
            <li id={"diary-kcal-demand"}>{dailyCalories}</li>
            <li>
              <StyledForm
                onChange={handleSubmitCaloriesChange(calculateCalories)}
              >
                <StyledLabel>
                  + / - kcal *:
                  <StyledInput
                    type="number"
                    {...registerCaloriesChange("kcal", {
                      max: 10000,
                      min: -10000,
                      required: true,
                      maxLength: 5,
                      pattern: /\d+/,
                    })}
                  />
                </StyledLabel>
              </StyledForm>
            </li>
          </ul>
          <div className="summary-bar-total border-top">
            <br />
            <br />
            {demandCompleted.map((item, idx) => (
              <ProgressBar
                key={idx}
                label={item.label}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
          {/* <div className="summary-bar-total border-top">
            <span className="amount-side-left">
              Kcal: {props.diaryTotalMacros.kcal.toFixed(1)}
            </span>
            <div>
              <span>
                Protein: {props.diaryTotalMacros.protein.toFixed(1)} /{" "}
              </span>
              <span>Carbs: {props.diaryTotalMacros.carbs.toFixed(1)} / </span>
              <span>Fat: {props.diaryTotalMacros.fat.toFixed(1)} </span>
            </div>
          </div> */}
          <hr />
          <ul>
            {props.selectedMeals.length !== 0 &&
              props.selectedMeals.map((meal, mealIndex) => (
                <React.Fragment key={meal.id}>
                  <li>
                    <ul>
                      <span>{meal.name}</span>
                      {meal.items.map((ingredient, ingIndex) => (
                        <li key={ingredient.id}>
                          <div className="amount-side-left">
                            <span>{ingredient.amount.toFixed(0) + "g"}</span>
                          </div>
                          <div>
                            <span>{ingredient.name}</span>
                            <div className="summary-bar">
                              <span>kcal: {ingredient.kcal.toFixed(0)} / </span>
                              <span>
                                protein: {ingredient.protein.toFixed(0)} /{" "}
                              </span>
                              <span>
                                carbs: {ingredient.carbs.toFixed(0)} /{" "}
                              </span>
                              <span>fat: {ingredient.fat.toFixed(0)} </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <div className="summary-bar-total">
                    <span className="amount-side-left">
                      kcal: {meal.totalMacros.kcal.toFixed(0)} /
                    </span>
                    <div>
                      <span>
                        protein: {meal.totalMacros.protein.toFixed(0)} /{" "}
                      </span>
                      <span>carbs: {meal.totalMacros.carbs.toFixed(0)} / </span>
                      <span>fat: {meal.totalMacros.fat.toFixed(0)} </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </ul>
          <div>
            <Button
              onClick={() => {
                userData.saveDiary(props.selectedMeals);
                resetSelected();
              }}
            >
              Save diary
            </Button>
            <Button warning onClick={() => props.clean([])}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiaryMaker;
