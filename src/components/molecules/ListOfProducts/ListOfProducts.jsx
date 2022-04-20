import { List, ListItem } from "./ListOfProductsStyles";
import Product from "../../organisms/Product/Product";

const ListOfProducts = ({ products }) => {
  return (
    <List>
      {products.map((elem) => (
        <ListItem key={elem.id}>
          <Product product={elem} />
        </ListItem>
      ))}
    </List>
  );
};
export default ListOfProducts;
