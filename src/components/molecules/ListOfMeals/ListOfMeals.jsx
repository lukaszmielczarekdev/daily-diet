import { Title, List, ListItem } from "./ListOfMealsStyles";
import Summary from "../../organisms/Summary/Summary";
import ProductReadOnly from "../../organisms/ProductReadOnly/ProductReadOnly";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { mealRemoved } from "../../../store/helpers";

const ListOfMeals = ({ meals }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {meals.length !== 0 &&
        meals.map(({ id, title, products, nutrients }) => (
          <ListItem key={id} margin={"1.5rem 0"}>
            <Title>{title}</Title>
            {products.map((product) => (
              <ProductReadOnly
                key={product.id}
                product={product}
                amount={product.amount}
              />
            ))}
            <Summary centered data={nutrients} />
            <ControlPanel justify={"left"}>
              <Button
                remove
                margin={"0 0.5rem 0.5rem 0"}
                onClick={() => {
                  dispatch(mealRemoved({ id }));
                }}
              >
                Delete
              </Button>
            </ControlPanel>
          </ListItem>
        ))}
    </List>
  );
};
export default ListOfMeals;
