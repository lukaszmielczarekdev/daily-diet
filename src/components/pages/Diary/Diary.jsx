import React from "react";
import {
  StyledTitle,
  StyledListItem,
  StyledList,
} from "../../../styles/globalComponentsStyles";
import {
  InnerContainer,
  ProgressBarsContainer,
  StyledSpan,
} from "./DiaryStyles";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ProductReadOnly from "../../organisms/ProductReadOnly/ProductReadOnly";
import Summary from "../../organisms/Summary/Summary";
import { useDispatch } from "react-redux";
import { deleteDiary } from "../../../store/userItems";
import Gallery from "../../organisms/Gallery/Gallery";
import RoundChart from "../../organisms/RoundChart/RoundChart";

const Diary = ({
  id,
  title,
  date,
  kcalDemand,
  progressData,
  items,
  resetView,
  toggleEditMode,
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Gallery
        smallText
        text={"center"}
        justify={"center"}
        padding={"0rem 3rem 3rem 3rem"}
        titlePrimary={date}
        titleSecondary={title}
        children={
          <InnerContainer column id="diary">
            <StyledSpan>Caloric demand:&nbsp;{kcalDemand}</StyledSpan>
            <ProgressBarsContainer>
              {Object.values(progressData).map(({ label, completed }, id) => (
                <RoundChart
                  data={[completed]}
                  label={label}
                  size={"200px"}
                  nameSize={"10px"}
                  valueSize={"16px"}
                  offset={-4}
                  key={id}
                />
              ))}
            </ProgressBarsContainer>
            <StyledList>
              {items.length !== 0 &&
                items.map(({ id, name, products, nutrients }) => (
                  <StyledListItem
                    key={id}
                    margin={"2rem 0"}
                    padding={"1rem 0 0 0"}
                    border
                  >
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
                  toggleEditMode();
                }}
                edit
              >
                Edit
              </Button>
              <Button
                margin={"0 0.5rem 0.5rem 0"}
                onClick={() => {
                  dispatch(deleteDiary(id));
                  resetView();
                }}
                remove
              >
                Delete
              </Button>
            </ControlPanel>
            <Button
              color={"black"}
              margin={"1.5rem 0 0 0"}
              align={"center"}
              onClick={() => {
                resetView();
              }}
            >
              Close
            </Button>
          </InnerContainer>
        }
      />
    </Container>
  );
};

export default Diary;
