import React from "react";
import {
  ProductContainer,
  ProductInfo,
  ProductTitle,
  SummaryContainer,
} from "./ProductReadOnlyStyles";
import Summary from "../Elements/Summary/Summary";

const ProductReadOnly = (props) => {
  return (
    <ProductContainer>
      <ProductInfo>{props.product.amount + "g"}</ProductInfo>
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

export default ProductReadOnly;
