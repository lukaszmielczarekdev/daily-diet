import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import { SectionText, Button } from "../../styles/globalComponentsStyles";
import { CarouselCard } from "./DiaryStyles";

const Diary = (props) => {
  const userData = useContext(UserDataContext);

  const macros = userData.calculateMacrosForMeals(props.items);

  return (
    <CarouselCard className="border">
      <SectionText smaller>
        <h4>{props.title}</h4>
        <ul>
          {props.items.length !== 0 &&
            props.items.map((meal, mealIndex) => (
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
                            <span>Carbs: {ingredient.carbs.toFixed(1)} / </span>
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
            Kcal: {macros.kcal.toFixed(1)}
          </span>
          <div>
            <span>Protein: {macros.protein.toFixed(1)} / </span>
            <span>Carbs: {macros.carbs.toFixed(1)} / </span>
            <span>Fat: {macros.fat.toFixed(1)} </span>
          </div>
        </div>
        <div>
          <Button warning onClick={() => userData.deleteDiary(props.id)}>
            Delete
          </Button>
        </div>
      </SectionText>
    </CarouselCard>
  );
};

export default Diary;
