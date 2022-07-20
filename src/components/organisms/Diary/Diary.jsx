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
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import Summary from "../Summary/Summary";
import { useDispatch, useSelector } from "react-redux";
import { deleteDiary } from "../../../store/diaries";
import Gallery from "../Gallery/Gallery";
import RoundChart from "../RoundChart/RoundChart";
import Rating from "../Rating/Rating";
import {
  calculateDemandCoverage,
  calculateMacrosForMeals,
} from "../../../utils/calculators";
import {
  currentItemRemoved,
  itemEditModeSet,
  editedMealsAdded,
  productsRemoved,
  mealsRemoved,
} from "../../../store/helpers";

import SelectedMeals from "../SelectedMeals/SelectedMeals";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import SearchBar from "../SearchField/SearchBar";

const Diary = ({ editMode, creatorAdjustment }) => {
  const { tdee, demandPercentage } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { tdee: 0, demandPercentage: { protein: 0, carbs: 0, fat: 0 } }
  );

  const { temporaryProducts, temporaryMeals, itemEditMode } = useSelector(
    (state) => state.user.helpers
  );

  const { meals: mealList } = useSelector((state) => state.resources.meals);
  const { products: productList } = useSelector(
    (state) => state.resources.products
  );

  const {
    _id,
    nutrients,
    calorieAdjustment,
    title,
    meals,
    ratingPublic: { average, rates },
  } = useSelector((state) =>
    state.user.helpers.currentItem?._id
      ? state.user.helpers.currentItem
      : {
          _id: null,
          nutrients: null,
          calorieAdjustment: null,
          title: null,
          createdAt: null,
          meals: [],
          ratingPublic: null,
        }
  );

  const caloricChange = creatorAdjustment ? calorieAdjustment : 0;

  const dispatch = useDispatch();

  const demandData = calculateDemandCoverage(
    tdee,
    demandPercentage,
    nutrients,
    caloricChange
  );

  return (
    <Container>
      {editMode && itemEditMode ? (
        <Gallery
          padding={"0rem 3rem 3rem 3rem"}
          children={
            <>
              {(temporaryMeals.length !== 0 || itemEditMode) && (
                <SelectedMeals editMode />
              )}
              {temporaryProducts.length !== 0 && <SelectedProducts />}
              <SearchBar
                placeholder="Search (min. 3 chars)"
                data={[...mealList, ...productList]}
              />
            </>
          }
        />
      ) : (
        <Gallery
          smallText
          text={"center"}
          justify={"center"}
          padding={"0rem 3rem 3rem 3rem"}
          titleSecondary={title}
          children={
            <InnerContainer column id="diary">
              <StyledSpan>Rating</StyledSpan>
              <Rating
                readOnly={editMode ? true : false}
                padding={"0"}
                diaryID={_id}
                rates={rates}
                average={average}
                width={"15%"}
              />
              <StyledSpan>
                Caloric demand:&nbsp;{caloricChange + tdee}
              </StyledSpan>
              <ProgressBarsContainer>
                {Object.keys(demandData).map((key, id) => (
                  <RoundChart
                    data={[demandData[key]]}
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
              <StyledList>
                {meals.length !== 0 &&
                  meals.map(({ id, title, products, nutrients }) => (
                    <StyledListItem
                      key={id}
                      margin={"2rem 0"}
                      padding={"1rem 0 0 0"}
                      border
                    >
                      <StyledTitle>{title}</StyledTitle>
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
              <Summary
                border
                centered
                fontWeight={"bolder"}
                data={calculateMacrosForMeals(meals)}
              />
              <ControlPanel border fit padding={"1rem 0 0 0"}>
                {editMode && (
                  <>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(itemEditModeSet());
                        dispatch(editedMealsAdded({ meals }));
                      }}
                      edit
                    >
                      Edit
                    </Button>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(deleteDiary(_id));
                        dispatch(currentItemRemoved());
                      }}
                      remove
                    >
                      Delete
                    </Button>
                  </>
                )}
              </ControlPanel>
              <Button
                color={"black"}
                margin={"1.5rem 0 0 0"}
                align={"center"}
                onClick={() => {
                  dispatch(currentItemRemoved());
                  dispatch(productsRemoved());
                  dispatch(mealsRemoved());
                }}
              >
                Close
              </Button>
            </InnerContainer>
          }
        />
      )}
    </Container>
  );
};

export default Diary;
