import React, { useEffect } from "react";
import Container from "../../templates/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { userItemCategories } from "../../../data/constants";
import MenuItem from "../../molecules/MenuItem/MenuItem";
import Gallery from "../../organisms/Gallery/Gallery";
import ClipLoader from "react-spinners/ClipLoader";
import Carousel from "../../organisms/Carousel/Carousel";
import BmrCalculator from "../../organisms/BMRCalculator/BMRCalculator";
import DemandEditor from "../../organisms/DemandEditor/DemandEditor";
import {
  diaryPlaceholders,
  mealPlaceholders,
  productPlaceholders,
} from "../../../data/constants";
import Diary from "../../organisms/Diary/Diary";
import DiaryCard from "../../organisms/DiaryCard/DiaryCard";
import Meal from "../../organisms/Meal/Meal";
import MealCard from "../../organisms/MealCard/MealCard";
import ProductCard from "../../organisms/ProductCard/ProductCard";
import ProductCreator from "../../organisms/ProductCreator/ProductCreator";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import { preferences } from "../../../data/constants";

import {
  currentCategorySet,
  currentCategoryRemoved,
  currentItemRemoved,
  productsRemoved,
  mealsRemoved,
  itemCreateModeSet,
  itemCreateModeRemoved,
} from "../../../store/helpers";
import UserDataEditor from "../../organisms/UserDataEditor/UserDataEditor";

const UserProfile = () => {
  const dispatch = useDispatch();

  const { diaries } = useSelector((state) => state.resources.diaries);
  const { meals } = useSelector((state) => state.resources.meals);
  const { products } = useSelector((state) => state.resources.products);
  const { status } = useSelector((state) => state.resources.diaries);

  const {
    currentItem,
    currentItemType,
    currentCategory,
    itemEditMode,
    itemCreateMode,
  } = useSelector((state) => state.user.helpers);

  useEffect(() => {
    return () => {
      dispatch(currentItemRemoved());
      dispatch(currentCategoryRemoved());
      dispatch(productsRemoved());
      dispatch(mealsRemoved());
      dispatch(itemCreateModeRemoved());
    };
  }, [dispatch]);

  const renderCards = (item) => {
    if (item === "diaries") {
      if (diaries.length === 0) return diaries.concat(diaryPlaceholders);
      if (diaries.length === 1)
        return diaries.concat(diaryPlaceholders[0], diaryPlaceholders[1]);
      if (diaries.length === 2) return diaries.concat(diaryPlaceholders[2]);
      else return diaries;
    }
    if (item === "meals") {
      if (meals.length === 0) return meals.concat(mealPlaceholders);
      if (meals.length === 1)
        return meals.concat(mealPlaceholders[0], mealPlaceholders[1]);
      if (meals.length === 2) return meals.concat(mealPlaceholders[2]);
      else return meals;
    }
    if (item === "products") {
      if (products.length === 0) return products.concat(productPlaceholders);
      if (products.length === 1)
        return products.concat(productPlaceholders[0], productPlaceholders[1]);
      if (products.length === 2) return products.concat(productPlaceholders[2]);
      else return products;
    }
  };

  return (
    <Container fillColor>
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"2rem 3rem 0 3rem"}
        titleSecondary={"Preferences"}
        children={
          <ControlPanel align={"baseline"}>
            {preferences.map((option) => (
              <MenuItem
                key={option.id}
                {...option}
                active={currentCategory === option.name}
                onClick={() => {
                  dispatch(
                    currentCategorySet(
                      currentCategory === option.name ? "" : option.name
                    )
                  );
                  dispatch(itemCreateModeRemoved());
                  dispatch(currentItemRemoved());
                  dispatch(productsRemoved());
                  dispatch(mealsRemoved());
                }}
              />
            ))}
          </ControlPanel>
        }
      />
      {currentCategory === "bmr" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <BmrCalculator editMode alternateView />
        </ControlPanel>
      )}
      {currentCategory === "demandPercentage" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <DemandEditor />
        </ControlPanel>
      )}
      {currentCategory === "userData" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <UserDataEditor />
        </ControlPanel>
      )}
      <Gallery
        text={"center"}
        justify={"center"}
        padding={"2rem 3rem 0 3rem"}
        titleSecondary={"Created items"}
        children={
          <ControlPanel align={"baseline"}>
            {userItemCategories.map((category) => (
              <MenuItem
                key={category.id}
                {...category}
                active={currentCategory === category.name}
                onClick={() => {
                  dispatch(
                    currentCategorySet(
                      currentCategory === category.name ? "" : category.name
                    )
                  );
                  dispatch(itemCreateModeRemoved());
                  dispatch(currentItemRemoved());
                  dispatch(productsRemoved());
                  dispatch(mealsRemoved());
                }}
              />
            ))}
          </ControlPanel>
        }
      />
      {currentCategory === "diary" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <ClipLoader loading={status === "loading"} size={150} />
          {Array.isArray(diaries) && (
            <Carousel
              infinite
              breakpoints
              items={renderCards("diaries").map((diary) => (
                <DiaryCard diary={diary} />
              ))}
            />
          )}
          {currentItem && currentItemType === "diary" && <Diary editMode />}
          {!currentItem && (
            <LinkItem
              add
              color={"white"}
              padding={"0.6rem"}
              radius={"10px 0"}
              to="/builder"
              children={"Create new diary"}
              size={"0.8rem"}
            />
          )}
        </ControlPanel>
      )}
      {currentCategory === "meal" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <ClipLoader loading={status === "loading"} size={150} />
          {Array.isArray(meals) && (
            <Carousel
              infinite
              breakpoints
              items={renderCards("meals").map((meal) => (
                <MealCard meal={meal} />
              ))}
            />
          )}
          {currentItem && currentItemType === "meal" && <Meal editMode />}
          {!currentItem && (
            <LinkItem
              add
              color={"white"}
              padding={"0.6rem"}
              radius={"10px 0"}
              to="/builder"
              children={"Create new meal"}
              size={"0.8rem"}
            />
          )}
        </ControlPanel>
      )}
      {currentCategory === "product" && status !== "loading" && (
        <ControlPanel margin={"0 0 2rem 0"}>
          <ClipLoader loading={status === "loading"} size={150} />
          {Array.isArray(products) && (
            <Carousel
              infinite
              breakpoints
              items={renderCards("products").map((product) => (
                <ProductCard product={product} />
              ))}
            />
          )}
          {((currentItem && currentItemType === "product") || itemEditMode) && (
            <ProductCreator editMode />
          )}
          {itemCreateMode && <ProductCreator />}
          {!currentItem && !itemCreateMode && (
            <LinkItem
              add
              onClick={() => dispatch(itemCreateModeSet())}
              color={"white"}
              padding={"0.6rem"}
              radius={"10px 0"}
              to="/profile"
              children={"Create new product"}
              size={"0.8rem"}
            />
          )}
        </ControlPanel>
      )}
    </Container>
  );
};

export default UserProfile;
