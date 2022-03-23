import React, { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import {
  ButtonContainer,
  ActionButton,
  StyledList,
  StyledListItem,
} from "../../styles/globalComponentsStyles";
import Product from "../Product/Product";
import { ProductsContainer, MealNameInput } from "./SelectedProductsStyles";
import Summary from "../Elements/Summary/Summary";

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
          <Summary data={props.selectedProductsTotalMacros} />
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
