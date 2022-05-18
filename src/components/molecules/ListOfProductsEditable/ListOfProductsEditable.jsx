import { List, ListItem } from "./ListOfProductsEditableStyles";
import ProductEditable from "../../organisms/ProductEditable/ProductEditable";

const ListOfProductsEditable = ({
  collection,
  calculateAmount,
  mealId,
  removeProduct,
}) => {
  return (
    <List>
      {collection.map((elem) => (
        <ListItem key={elem.id}>
          <ProductEditable
            mealId={mealId}
            product={elem}
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
