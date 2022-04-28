import React from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  ProductForm,
  ProductInput,
  ProductActions,
} from "./ProductStyles";
import Button from "../../atoms/Button/Button";
import Summary from "../Summary/Summary";
import { useDispatch } from "react-redux";
import Ingredients from "../../../data/ingredients.json";
import {
  productRemoved,
  productAmountCalculated,
} from "../../../store/userItems";

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
        <Button
          width={"100%"}
          margin={"0.5rem 0"}
          remove
          onClick={() => dispatch(productRemoved({ id: product.id }))}
        >
          Delete
        </Button>
      </ProductActions>
      <Summary
        data={product}
        fontSize="0.9rem"
        color={"green"}
        margin={"0"}
        name={product.name}
      />
    </ProductContainer>
  );
};

export default Product;
