import React from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  ProductForm,
  ProductInput,
  ProductTitle,
  ProductActions,
  SummaryContainer,
} from "./ProductStyles";
import { ActionButton } from "../../styles/globalComponentsStyles";
import Summary from "../Elements/Summary/Summary";
import { useDispatch } from "react-redux";
import Ingredients from "../../data/ingredients.json";
import { productRemoved, productAmountCalculated } from "../../store/userItems";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const {
    register: registerAmount,
    handleSubmit: handleSubmitAmount,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      amount: product.amount,
    },
  });

  const submitAmount = (data) => {
    dispatch(
      productAmountCalculated({
        ingredients: Ingredients,
        id: product.id,
        amount: data.amount,
      })
    );
  };

  return (
    <ProductContainer>
      <ProductActions>
        <ProductForm
          onSubmit={handleSubmitAmount(submitAmount)}
          onChange={handleSubmitAmount(submitAmount)}
        >
          <ProductInput
            type="number"
            placeholder="Grams:"
            {...registerAmount("amount", {
              valueAsNumber: true,
              max: 5000,
              min: 1,
              required: true,
              maxLength: 4,
              pattern: /\d+/,
            })}
          />
        </ProductForm>
        <ActionButton
          width={"100%"}
          margin={"0.5rem 0"}
          delete
          onClick={() => dispatch(productRemoved({ id: product.id }))}
        >
          Delete
        </ActionButton>
      </ProductActions>
      <SummaryContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <Summary
          data={product}
          fontSize="0.9rem"
          color={"green"}
          margin={"0 0 0 0.5rem"}
        />
      </SummaryContainer>
    </ProductContainer>
  );
};

export default Product;
