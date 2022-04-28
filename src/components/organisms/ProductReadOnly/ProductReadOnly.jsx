import React from "react";
import {
  ProductContainer,
  ProductInfo,
  ProductTitle,
  SummaryContainer,
} from "./ProductReadOnlyStyles";
import Summary from "../Summary/Summary";

const ProductReadOnly = ({ product }) => {
  return (
    <ProductContainer>
      <ProductInfo>{product.amount + "g"}</ProductInfo>
      <SummaryContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <Summary
          data={product}
          fontSize="0.9rem"
          color={"green"}
          margin={"0"}
        />
      </SummaryContainer>
    </ProductContainer>
  );
};

export default ProductReadOnly;
