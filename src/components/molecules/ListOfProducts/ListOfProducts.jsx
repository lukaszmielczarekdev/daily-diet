import { List, ListItem } from "./ListOfProductsStyles";
import Product from "../../organisms/Product/Product";
import { useSelector } from "react-redux";

const ListOfProducts = () => {
  const { temporaryProducts } = useSelector((state) => state.user.userItems);

  return (
    <List>
      {temporaryProducts.map((elem) => (
        <ListItem key={elem.id}>
          <Product product={elem} />
        </ListItem>
      ))}
    </List>
  );
};
export default ListOfProducts;
