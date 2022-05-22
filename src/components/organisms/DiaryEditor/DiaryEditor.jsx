import React from "react";
import {
  StyledListItem,
  StyledList,
  StyledForm,
} from "../../../styles/globalComponentsStyles";
import {
  InnerContainer,
  ProgressBarsContainer,
  StyledSpan,
  DiaryInput,
  Header,
  MealNameInput,
} from "./DiaryEditorStyles";
import { useForm } from "react-hook-form";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ListOfProductsEditable from "../../molecules/ListOfProductsEditable/ListOfProductsEditable";
import Summary from "../Summary/Summary";
import Gallery from "../Gallery/Gallery";
import RoundChart from "../RoundChart/RoundChart";
import SearchBar from "../SearchField/SearchBar";
import Ingredients from "../../../data/ingredients.json";
import { useSelector, useDispatch } from "react-redux";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import { updateDiary } from "../../../store/userItems";

const DiaryEditor = ({
  currentDiary,
  currentDiary: { _id, createdAt, name, demand, meals, demandCoverage },
  updateDiaryDemand,
  toggleEditMode,
  calculateAmount,
  removeProduct,
  addMeal,
  changeMealName,
  resetChanges,
  changeDiaryName,
  resetView,
}) => {
  const {
    register: registerCaloriesChange,
    handleSubmit: handleSubmitCaloriesChange,
    // formState: { errors },
  } = useForm();

  const { meals: userMeals, temporaryProducts } = useSelector(
    (state) => state.user.userItems
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Gallery
        smallText
        text={"center"}
        justify={"center"}
        padding={"0rem 3rem 3rem 3rem"}
        titlePrimary={createdAt}
        children={
          <>
            <DiaryInput
              text
              id={"diary-name-edit"}
              type="text"
              placeholder={name}
              onChange={() => {
                changeDiaryName(
                  document.getElementById("diary-name-edit").value
                );
              }}
            />
            <InnerContainer column id="diary-editor">
              <Header>
                <StyledSpan>Caloric demand:&nbsp;{demand.kcal}</StyledSpan>
                <StyledForm
                  onChange={handleSubmitCaloriesChange(updateDiaryDemand)}
                  onSubmit={handleSubmitCaloriesChange(updateDiaryDemand)}
                >
                  <DiaryInput
                    id="caloric-adjustment-edit"
                    placeholder={"+ - kcal"}
                    type="number"
                    {...registerCaloriesChange("kcal", {
                      valueAsNumber: true,
                      max: 5000,
                      min: -5000,
                      maxLength: 5,
                      pattern: /\d+/,
                    })}
                  />
                </StyledForm>
              </Header>
              <ProgressBarsContainer>
                {Object.values(demandCoverage).map(
                  ({ label, completed }, id) => (
                    <RoundChart
                      data={[completed]}
                      label={label}
                      size={"200px"}
                      nameSize={"10px"}
                      valueSize={"16px"}
                      offset={-4}
                      key={id}
                    />
                  )
                )}
              </ProgressBarsContainer>
              <StyledList>
                {meals.length !== 0 &&
                  meals.map(({ id, name, products, nutrients }) => (
                    <StyledListItem
                      key={id}
                      margin={"2rem 0"}
                      padding={"1rem 0 0 0"}
                      border
                    >
                      <MealNameInput
                        text
                        id={id}
                        type="text"
                        placeholder={name}
                        onChange={() => {
                          changeMealName(id, document.getElementById(id).value);
                        }}
                      />
                      <ListOfProductsEditable
                        mealId={id}
                        collection={products}
                        calculateAmount={calculateAmount}
                        removeProduct={removeProduct}
                      />
                      <Summary centered data={nutrients} />
                    </StyledListItem>
                  ))}
              </StyledList>
              <ControlPanel fit>
                <Button
                  color={"black"}
                  margin={"0 0.5rem 0.5rem 0"}
                  onClick={() => {
                    dispatch(updateDiary({ id: _id, diary: currentDiary }));
                    toggleEditMode();
                  }}
                  save
                >
                  Save
                </Button>
                <Button
                  margin={"0 0.5rem 0.5rem 0"}
                  onClick={() => resetChanges()}
                  remove
                >
                  Reset
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
            {temporaryProducts.length !== 0 && (
              <SelectedProducts
                margin={"1rem 0 0 0"}
                diaryEditorMode={addMeal}
              />
            )}
            <SearchBar
              margin={"1rem 0"}
              placeholder="Search (min. 3 chars)"
              data={[...Ingredients, ...userMeals]}
            />
          </>
        }
      />
    </Container>
  );
};

export default DiaryEditor;
