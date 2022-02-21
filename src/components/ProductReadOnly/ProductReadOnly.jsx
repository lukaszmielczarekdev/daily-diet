import React from "react";
import {
  ProductContainer,
  ProductInfo,
  ElementsList,
  ProductTitle,
  Element,
  SummaryContainer,
} from "./ProductReadOnlyStyles";

const ProductReadOnly = (props) => {
  return (
    <ProductContainer>
      <ProductInfo>{props.product.amount + "g"}</ProductInfo>
      <SummaryContainer>
        <ProductTitle>{props.product.name}</ProductTitle>
        <ElementsList>
          <Element>Kcal: {props.product.kcal.toFixed(0)}&nbsp;|&nbsp;</Element>
          <Element>
            Protein: {props.product.protein.toFixed(0)}&nbsp;|&nbsp;
          </Element>
          <Element>
            Carbs: {props.product.carbs.toFixed(0)}&nbsp;|&nbsp;
          </Element>
          <Element>Fat: {props.product.fat.toFixed(0)} </Element>
        </ElementsList>
      </SummaryContainer>
    </ProductContainer>
  );
};

export default ProductReadOnly;
