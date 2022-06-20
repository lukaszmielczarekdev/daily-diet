import { List, ListItem } from "./ListOfProductsEditableStyles";
import ProductEditable from "../../organisms/ProductEditable/ProductEditable";

const ListOfProductsEditable = ({
  collection,
  calculateAmount,
  mealId,
  removeProduct,
  mealIndex,
}) => {
  return (
    <List>
      {collection.map((elem, index) => (
        <ListItem key={index}>
          <ProductEditable
            mealId={mealId}
            product={elem}
            productIndex={index}
            mealIndex={mealIndex}
            products={collection}
            calculateAmount={calculateAmount}
            removeProduct={removeProduct}
          />
        </ListItem>
      ))}
    </List>
  );
};
export default ListOfProductsEditable;
