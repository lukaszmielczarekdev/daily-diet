import { Title, List, ListItem } from "./ListOfMealsStyles";
import Summary from "../../organisms/Summary/Summary";
import ProductReadOnly from "../../organisms/ProductReadOnly/ProductReadOnly";

const ListOfMeals = ({ meals }) => {
  return (
    <List>
      {meals.length !== 0 &&
        meals.map(({ id, name, products, nutrients }) => (
          <ListItem key={id} margin={"1.5rem 0"}>
            <Title>{name}</Title>
            {products.map((product) => (
              <ProductReadOnly
                key={product.id}
                product={product}
                amount={product.amount}
              />
            ))}
            <Summary centered data={nutrients} />
          </ListItem>
        ))}
    </List>
  );
};
export default ListOfMeals;
