import React from "react";
import {
  StyledTitle,
  ButtonContainer,
  ActionButton,
  StyledListItem,
  StyledList,
} from "../../styles/globalComponentsStyles";
import {
  CarouselCard,
  Container,
  ProgressBarsContainer,
  StyledSpan,
} from "./DiaryStyles";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import ProgressBar from "../Elements/ProgressBar/ProgressBar";
import Summary from "../Elements/Summary/Summary";
import { useDispatch } from "react-redux";
import { diaryRemoved } from "../../store/userItems";

const Diary = ({ id, title, kcalDemand, progressData, items }) => {
  const dispatch = useDispatch();

  return (
    <CarouselCard>
      <Container column id="diary">
        <StyledTitle main>{title}</StyledTitle>
        <StyledSpan>Caloric demand:&nbsp;{kcalDemand}</StyledSpan>
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
        <StyledList>
          {items.length !== 0 &&
            items.map(({ id, name, products, nutrients }) => (
              <StyledListItem key={id}>
                <StyledTitle key={id}>{name}</StyledTitle>
                {products.map((ingredient) => (
                  <ProductReadOnly
                    key={ingredient.id}
                    product={ingredient}
                    amount={ingredient.amount}
                  />
                ))}
                <Summary data={nutrients} />
              </StyledListItem>
            ))}
        </StyledList>
        <ButtonContainer fit>
          <ActionButton
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => {
              dispatch(diaryRemoved({ id }));
            }}
            delete
          >
            Delete
          </ActionButton>
        </ButtonContainer>
      </Container>
    </CarouselCard>
  );
};

export default Diary;
