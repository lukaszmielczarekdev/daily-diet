import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import {
  StyledTitle,
  ButtonContainer,
  ActionButton,
  StyledListItem,
  StyledList,
} from "../../styles/globalComponentsStyles";
import {
  CarouselCard,
  DiaryContainer,
  ProgressBarsContainer,
  StyledSpan,
} from "./DiaryStyles";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import ProgressBar from "../Elements/ProgressBar/ProgressBar";
import Summary from "../Elements/Summary/Summary";

const Diary = (props) => {
  const userData = useContext(UserDataContext);

  return (
    <CarouselCard>
      <DiaryContainer column id="diary">
        <StyledTitle>{props.title}</StyledTitle>
        <StyledSpan>Caloric demand:&nbsp;{props.kcalDemand}</StyledSpan>
        <ProgressBarsContainer>
          {Object.values(props.progressData).map((item, id) => (
            <ProgressBar
              key={id}
              label={item.label}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </ProgressBarsContainer>
        <StyledList>
          {props.items.length !== 0 &&
            props.items.map((meal, mealIndex) => (
              <StyledListItem key={Math.random()}>
                <StyledTitle key={Math.random()}>{meal.name}</StyledTitle>
                {meal.items.map((ingredient, ingIndex) => (
                  <ProductReadOnly
                    key={ingIndex}
                    product={ingredient}
                    amount={ingredient.amount}
                  />
                ))}
                <Summary key={Math.random()} data={meal.totalMacros} />
              </StyledListItem>
            ))}
        </StyledList>
        <ButtonContainer fit>
          <ActionButton
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => userData.deleteDiary(props.id)}
            delete
          >
            Delete
          </ActionButton>
        </ButtonContainer>
      </DiaryContainer>
    </CarouselCard>
  );
};

export default Diary;
