import React, { useRef } from "react";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { ProductsContainer, MealNameInput } from "./SelectedProductsStyles";
import Summary from "../Summary/Summary";
import { useSelector, useDispatch } from "react-redux";
import { calculateMacrosForProducts } from "../../../utils/calculators";
import {
  mealAdded,
  productsRemoved,
  currentItemRemoved,
  currentItemSet,
  editedProductsAdded,
} from "../../../store/helpers";
import ListOfProducts from "../../molecules/ListOfProducts/ListOfProducts";
import { createMeal, updateMeal } from "../../../store/meals";
import { notify } from "../../../store/utils";

const SelectedProducts = ({ margin, editMode }) => {
  const dispatch = useDispatch();
  const { temporaryProducts, currentItemBackup } = useSelector(
    (state) => state.user.helpers
  );

  const mealTitle = useRef();

  const handleCreateMeal = () => {
    const title = mealTitle.current.value.trim();

    if (
      title &&
      title.length >= 3 &&
      title.length <= 25 &&
      temporaryProducts.length !== 0
    ) {
      dispatch(
        createMeal({
          title: `[Meal] ${mealTitle.current.value}`,
          products: temporaryProducts,
          nutrients: calculateMacrosForProducts(temporaryProducts),
        })
      );
    } else {
      notify("Something is missing");
    }
  };

  const handleUpdateMeal = () => {
    const title = mealTitle.current.value.trim();

    if (
      title &&
      title.length >= 3 &&
      title.length <= 25 &&
      temporaryProducts.length !== 0
    ) {
      dispatch(
        updateMeal({
          id: currentItemBackup._id,
          meal: {
            id: currentItemBackup.id,
            title: `[Meal] ${mealTitle.current.value}`,
            products: temporaryProducts,
            nutrients: calculateMacrosForProducts(temporaryProducts),
          },
        })
      );

      dispatch(productsRemoved());
      dispatch(currentItemRemoved());
    } else {
      notify("Something is missing");
    }
  };

  return (
    <ProductsContainer id="product-select" margin={margin}>
      <MealNameInput
        text
        ref={mealTitle}
        type="text"
        placeholder={"Meal title (3 - 25 length)"}
      />
      <ListOfProducts products={temporaryProducts} />
      <Summary centered data={calculateMacrosForProducts(temporaryProducts)} />
      <ControlPanel fit border justify={"left"}>
        {!editMode && (
          <Button
            add
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() =>
              dispatch(
                mealAdded({
                  title: mealTitle.current.value,
                  products: temporaryProducts,
                })
              )
            }
          >
            Add
          </Button>
        )}
        <Button
          add
          margin={"0 0.5rem 0.5rem 0"}
          onClick={() => {
            editMode ? handleUpdateMeal() : handleCreateMeal();
          }}
        >
          {editMode ? "Update" : "Save"}
        </Button>
        {editMode && (
          <Button
            save
            color={"black"}
            margin={"0 0.5rem 0.5rem 0"}
            onClick={() => {
              dispatch(
                editedProductsAdded({ products: currentItemBackup.products })
              );
              dispatch(
                currentItemSet({
                  item: currentItemBackup,
                  type: "meal",
                })
              );
            }}
          >
            Reset
          </Button>
        )}
        <Button
          remove
          margin={"0 0.5rem 0.5rem 0"}
          onClick={() => dispatch(productsRemoved())}
        >
          Delete all
        </Button>
      </ControlPanel>
      <Button
        color={"black"}
        margin={"1.5rem 0 0 0"}
        align={"center"}
        onClick={() => {
          dispatch(currentItemRemoved());
        }}
      >
        Close
      </Button>
    </ProductsContainer>
  );
};

export default SelectedProducts;
