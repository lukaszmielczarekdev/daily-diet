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

const Product = (props) => {
  const {
    register: registerAmount,
    handleSubmit: handleSubmitAmount,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      amount: props.product.amount,
    },
  });

  const submitAmount = (data) => {
    props.calculateAmount(Number(data.amount), props.index);
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
          onClick={() => props.deleteProduct(props.index)}
        >
          Delete
        </ActionButton>
      </ProductActions>
      <SummaryContainer>
        <ProductTitle>{props.product.name}</ProductTitle>
        <Summary
          data={props.product}
          fontSize="0.9rem"
          color={"green"}
          margin={"0 0 0 0.5rem"}
        />
      </SummaryContainer>
    </ProductContainer>
  );
};

export default Product;
