import React from "react";
import {
  ButtonContainer,
  ActionButton,
  StyledList,
  StyledListItem,
} from "../../styles/globalComponentsStyles";
import Product from "../Product/Product";
import { ProductsContainer, MealNameInput } from "./SelectedProductsStyles";
import Summary from "../Elements/Summary/Summary";
import { useSelector, useDispatch } from "react-redux";
import { calculateMacrosForProducts } from "../../utils/calculators";
import { mealAdded, mealSaved, productsRemoved } from "../../store/userItems";

const SelectedProducts = () => {
  const dispatch = useDispatch();
  const { temporaryProducts } = useSelector((state) => state.user.userItems);

  return (
    <>
      {temporaryProducts.length !== 0 && (
        <ProductsContainer id="product-select">
          <MealNameInput
            text
            id={"meal-name"}
            type="text"
            placeholder={"Meal name (3 - 25 chars)"}
          />
          <StyledList>
            {temporaryProducts.map((elem) => (
              <StyledListItem key={elem.id}>
                <Product product={elem} />
              </StyledListItem>
            ))}
          </StyledList>
          <Summary data={calculateMacrosForProducts(temporaryProducts)} />
          <ButtonContainer fit>
            <ActionButton
              add
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() =>
                dispatch(
                  mealAdded({
                    name: document.getElementById("meal-name").value,
                    products: temporaryProducts,
                  })
                )
              }
            >
              Add
            </ActionButton>
            <ActionButton
              save
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() =>
                dispatch(
                  mealSaved({
                    name:
                      "[Template] " +
                      document.getElementById("meal-name").value,
                    products: temporaryProducts,
                  })
                )
              }
            >
              Save
            </ActionButton>
            <ActionButton
              delete
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => dispatch(productsRemoved())}
            >
              Delete
            </ActionButton>
          </ButtonContainer>
        </ProductsContainer>
      )}
    </>
  );
};

export default SelectedProducts;
