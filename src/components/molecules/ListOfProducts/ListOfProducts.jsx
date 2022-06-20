import { List, ListItem } from "./ListOfProductsStyles";
import Product from "../../organisms/Product/Product";

const ListOfProducts = ({ products }) => {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <Product product={product} />
        </ListItem>
      ))}
    </List>
  );
};
export default ListOfProducts;
