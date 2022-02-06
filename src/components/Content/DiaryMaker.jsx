import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import { Button } from "../../styles/globalComponentsStyles";

const DiaryMaker = (props) => {
  const userData = useContext(UserDataContext);
  return (
    <>
      {props.selectedMeals.length !== 0 && (
        <div id="diary">
          <p>
            <input id={"diary-name"} type="text" placeholder={"Diary name"} /> *
            - {new Date().toLocaleDateString()}
          </p>
          <ul>
            {props.selectedMeals.length !== 0 &&
              props.selectedMeals.map((meal, mealIndex) => (
                <React.Fragment key={mealIndex}>
                  <li>
                    <ul>
                      <span>{meal.name}</span>
                      {meal.items.map((ingredient, ingIndex) => (
                        <li key={ingIndex}>
                          <div className="amount-side-left">
                            <span>{ingredient.amount.toFixed(1) + "g"}</span>
                          </div>
                          <div>
                            <span>{ingredient.name}</span>
                            <div className="summary-bar">
                              <span>Kcal: {ingredient.kcal.toFixed(1)} / </span>
                              <span>
                                Protein: {ingredient.protein.toFixed(1)} /{" "}
                              </span>
                              <span>
                                Carbs: {ingredient.carbs.toFixed(1)} /{" "}
                              </span>
                              <span>Fat: {ingredient.fat.toFixed(1)} </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <div className="summary-bar-total">
                    <span className="amount-side-left">
                      Kcal: {meal.totalMacros.kcal.toFixed(1)}
                    </span>
                    <div>
                      <span>
                        Protein: {meal.totalMacros.protein.toFixed(1)} /{" "}
                      </span>
                      <span>Carbs: {meal.totalMacros.carbs.toFixed(1)} / </span>
                      <span>Fat: {meal.totalMacros.fat.toFixed(1)} </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </ul>
          <div className="summary-bar-total border-top">
            <span className="amount-side-left">
              Kcal: {props.mealTotalMacros.kcal.toFixed(1)}
            </span>
            <div>
              <span>
                Protein: {props.mealTotalMacros.protein.toFixed(1)} /{" "}
              </span>
              <span>Carbs: {props.mealTotalMacros.carbs.toFixed(1)} / </span>
              <span>Fat: {props.mealTotalMacros.fat.toFixed(1)} </span>
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                userData.saveDiary(props.selectedMeals);
                props.clean([]);
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
