import React from "react";
import { useForm } from "react-hook-form";
import {
  ProductContainer,
  ProductForm,
  ProductInput,
  ProductActions,
  SummaryContainer,
} from "./ProductEditableStyles";
import Button from "../../atoms/Button/Button";
import Summary from "../Summary/Summary";

const ProductEditable = ({
  product,
  products,
  calculateAmount,
  removeProduct,
  mealId,
  mealIndex,
  productIndex,
}) => {
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
    calculateAmount(
      mealId,
      products,
      product._id,
      data.amount,
      mealIndex,
      productIndex
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
          onClick={() =>
            removeProduct(mealId, product._id, mealIndex, productIndex)
          }
        >
          Delete
        </Button>
      </ProductActions>
      <SummaryContainer>
        <Summary
          data={product.nutrients}
          fontSize="0.9rem"
          color={"green"}
          margin={"0"}
          title={product.title}
        />
      </SummaryContainer>
    </ProductContainer>
  );
};

export default ProductEditable;
