import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import {
  ButtonContainer,
  ActionButton,
  StyledList,
  StyledListItem,
} from "../../styles/globalComponentsStyles";
import Product from "../Product/Product";
import {
  ProductsContainer,
  MealNameInput,
  ElementsList,
} from "./SelectedProductsStyles";

const SelectedProducts = (props) => {
  const userData = useContext(UserDataContext);

  return (
    <>
      {props.selectedProducts.length !== 0 && (
        <ProductsContainer id="product-select">
          <MealNameInput
            text
            id={"name"}
            type="text"
            placeholder={"Meal name (3 - 25 chars) *"}
          />
          <StyledList>
            {props.selectedProducts.map((elem, index) => (
              <StyledListItem key={elem.id}>
                <Product
                  key={elem.id}
                  product={elem}
                  index={index}
                  calculateAmount={props.calculateAmount}
                  deleteProduct={props.deleteProduct}
                />
              </StyledListItem>
            ))}
          </StyledList>
          <ElementsList>
            <StyledListItem>
              Kcal: {props.selectedProductsTotalMacros.kcal.toFixed(0)}
              &nbsp;|&nbsp;
            </StyledListItem>
            <StyledListItem>
              Protein: {props.selectedProductsTotalMacros.protein.toFixed(0)}
              &nbsp;|&nbsp;
            </StyledListItem>
            <StyledListItem>
              Carbs: {props.selectedProductsTotalMacros.carbs.toFixed(0)}
              &nbsp;|&nbsp;
            </StyledListItem>
            <StyledListItem>
              Fat: {props.selectedProductsTotalMacros.fat.toFixed(0)}
            </StyledListItem>
          </ElementsList>
          <ButtonContainer fit>
            <ActionButton
              add
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => props.addMeal(props.selectedProducts)}
            >
              Add
            </ActionButton>
            <ActionButton
              save
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => userData.saveMeal(props.selectedProducts)}
            >
              Save
            </ActionButton>
            <ActionButton
              delete
              margin={"0 0.5rem 0.5rem 0"}
              onClick={() => props.clearProducts()}
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
