import React, { useRef } from "react";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { ProductsContainer, MealNameInput } from "./SelectedProductsStyles";
import Summary from "../Summary/Summary";
import { useSelector, useDispatch } from "react-redux";
import { calculateMacrosForProducts } from "../../../utils/calculators";
import {
  mealAdded,
  mealSaved,
  productsRemoved,
} from "../../../store/userItems";
import ListOfProducts from "../../molecules/ListOfProducts/ListOfProducts";

const SelectedProducts = () => {
  const dispatch = useDispatch();
  const { temporaryProducts } = useSelector((state) => state.user.userItems);
  const mealName = useRef();

  return (
    <ProductsContainer id="product-select">
      <MealNameInput
        text
        ref={mealName}
        type="text"
        placeholder={"Meal name (3 - 25 chars)"}
      />
      <ListOfProducts />
      <Summary centered data={calculateMacrosForProducts(temporaryProducts)} />
      <ControlPanel fit justify={"left"}>
        <Button
          add
          margin={"0 0.5rem 0.5rem 0"}
          onClick={() =>
            dispatch(
              mealAdded({
                name: mealName.current.value,
                products: temporaryProducts,
              })
            )
          }
        >
          Add
        </Button>
        <Button
          save
          margin={"0 0.5rem 0.5rem 0"}
          onClick={() =>
            dispatch(
              mealSaved({
                name: "[Template] " + String(mealName.current.value),
                products: temporaryProducts,
              })
            )
          }
        >
          Save
        </Button>
        <Button
          remove
          margin={"0 0.5rem 0.5rem 0"}
          onClick={() => dispatch(productsRemoved())}
        >
          Delete
        </Button>
      </ControlPanel>
    </ProductsContainer>
  );
};

export default SelectedProducts;
