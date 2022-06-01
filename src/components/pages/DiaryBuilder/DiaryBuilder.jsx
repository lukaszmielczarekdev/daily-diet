import React from "react";
import SearchBar from "../../organisms/SearchField/SearchBar";
import Ingredients from "../../../data/ingredients.json";
import SelectedMeals from "../../organisms/SelectedMeals/SelectedMeals";
import SelectedProducts from "../../organisms/SelectedProducts/SelectedProducts";
import Container from "../../templates/Container/Container";
import Gallery from "../../organisms/Gallery/Gallery";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Card2 from "../../molecules/Card2/Card2";
import { useSelector } from "react-redux";
import { diaryBuilderSteps } from "../../../data/constants";
import ProductDetails from "../../molecules/ProductDetails/ProductDetails";
import { exampleMeals } from "../../../data/constants";
import Title from "../../atoms/Title/Title";

const DiaryBuilder = () => {
  const { meals, temporaryProducts } = useSelector(
    (state) => state.user.userItems
  );

  const bmr = useSelector((state) =>
    state.user.authData.currentUser?.profile.bmr
      ? state.user.authData.currentUser.profile.bmr
      : 0
  );

  return (
    <Container id="diarybuilder" fillColor>
      <Gallery
        text={"center"}
        justify={"center"}
        description={
          "Diet diaries are made up of meals, which in turn are made up of the products you have chosen. You can save built meals as templates and use them later."
        }
        padding={"3rem"}
        titlePrimary={"Build your diary by"}
        titleSecondary={"Fallowing These Steps"}
        children={
          <ControlPanel align={"baseline"}>
            {diaryBuilderSteps.map((step) => (
              <Card2 fillColor {...step} key={step.id} />
            ))}
          </ControlPanel>
        }
      />
      <Title text={"center"} titlePrimary={"Example Meals"} />
      <ControlPanel justify={"space-between"} margin={"1rem 0 3rem 0"}>
        {exampleMeals.map((meal) => (
          <ProductDetails key={meal.id} {...meal} />
        ))}
      </ControlPanel>
      <Title text={"center"} titlePrimary={"Builder"} />
      {bmr && (
        <>
          <SelectedMeals />
          {temporaryProducts.length !== 0 && <SelectedProducts />}
          <SearchBar
            placeholder="Search (min. 3 chars)"
            data={[...Ingredients, ...meals]}
          />
        </>
      )}
    </Container>
  );
};

export default DiaryBuilder;
