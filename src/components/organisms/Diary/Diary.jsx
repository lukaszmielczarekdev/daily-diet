import React from "react";
import {
  StyledTitle,
  StyledListItem,
  StyledList,
} from "../../../styles/globalComponentsStyles";
import {
  CarouselCard,
  Container,
  ProgressBarsContainer,
  StyledSpan,
} from "./DiaryStyles";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import ProgressBar from "../../organisms/ProgressBar/ProgressBar";
import Summary from "../Summary/Summary";
import { useDispatch } from "react-redux";
import { diaryRemoved } from "../../../store/userItems";

const Diary = ({ id, title, kcalDemand, progressData, items }) => {
  const dispatch = useDispatch();

  return (
    <CarouselCard>
      <Container column id="diary">
        <StyledTitle main>{title}</StyledTitle>
        <StyledSpan centered>Caloric demand:&nbsp;{kcalDemand}</StyledSpan>
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
                <Summary centered data={nutrients} />
              </StyledListItem>
            ))}
        </StyledList>
        <ControlPanel fit>
          <Button
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => {
              dispatch(diaryRemoved({ id }));
            }}
            remove
          >
            Delete
          </Button>
        </ControlPanel>
      </Container>
    </CarouselCard>
  );
};

export default Diary;
