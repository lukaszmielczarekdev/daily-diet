import { List, ListItem } from "./ListOfProductsStyles";
import Product from "../../organisms/Product/Product";

const ListOfProducts = ({ collection }) => {
  return (
    <List>
      {collection.map((elem) => (
        <ListItem key={elem.id}>
          <Product product={elem} />
        </ListItem>
      ))}
    </List>
  );
};
export default ListOfProducts;
