import React from "react";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import ProductReadOnly from "../ProductReadOnly/ProductReadOnly";
import { ProductsContainer, StyledSpan } from "./MealStyles";
import Summary from "../Summary/Summary";
import Gallery from "../Gallery/Gallery";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeal } from "../../../store/meals";
import {
  calculateMacrosForProducts,
  calculateDemandCoverage,
} from "../../../utils/calculators";
import { ProgressBarsContainer } from "../../../styles/globalComponentsStyles";
import RoundChart from "../RoundChart/RoundChart";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import SearchBar from "../SearchField/SearchBar";
import {
  itemEditModeSet,
  editedProductsAdded,
  currentItemRemoved,
  currentCategoryRemoved,
  productsRemoved,
  mealsRemoved,
} from "../../../store/helpers";

const Meal = ({ editMode }) => {
  const { bmr, demandPercentage } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { bmr: 0, demandPercentage: { protein: 0, carbs: 0, fat: 0 } }
  );

  const { temporaryProducts, itemEditMode } = useSelector(
    (state) => state.user.helpers
  );
  const { meals: mealList } = useSelector((state) => state.resources.meals);
  const { products: productList } = useSelector(
    (state) => state.resources.products
  );

  const { _id, nutrients, title, createdAt, products } = useSelector((state) =>
    state.user.helpers.currentItem?._id
      ? state.user.helpers.currentItem
      : {
          _id: null,
          nutrients: null,
          title: null,
          createdAt: null,
          products: null,
        }
  );

  const dispatch = useDispatch();

  const demandData = calculateDemandCoverage(
    bmr,
    demandPercentage,
    nutrients,
    0
  );

  return (
    <Container>
      {editMode && itemEditMode ? (
        <Gallery
          padding={"0rem 3rem 3rem 3rem"}
          children={
            <>
              {(temporaryProducts.length !== 0 || itemEditMode) && (
                <SelectedProducts editMode />
              )}
              <SearchBar
                placeholder={"Search (min. 3 chars)"}
                data={[...mealList, ...productList]}
              />
            </>
          }
        />
      ) : (
        <Gallery
          smallText
          text={"center"}
          justify={"center"}
          padding={"0rem 3rem 3rem 3rem"}
          titlePrimary={createdAt}
          titleSecondary={title}
          children={
            <ProductsContainer id="product-select-editor">
              <StyledSpan>Caloric demand:&nbsp;{bmr}</StyledSpan>
              <ProgressBarsContainer>
                {Object.keys(demandData).map((key, id) => (
                  <RoundChart
                    data={[demandData[key]]}
                    label={key}
                    size={"50%"}
                    nameSize={"8px"}
                    valueSize={"12px"}
                    offset={-4}
                    ringSize={"60%"}
                    key={id}
                  />
                ))}
              </ProgressBarsContainer>
              {products.map((ingredient) => (
                <ProductReadOnly
                  key={ingredient._id}
                  product={ingredient}
                  amount={ingredient.amount}
                />
              ))}
              <Summary centered data={calculateMacrosForProducts(products)} />
              <ControlPanel border fit>
                {editMode && (
                  <>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(itemEditModeSet());
                        dispatch(editedProductsAdded({ products }));
                      }}
                      edit
                    >
                      Edit
                    </Button>
                    <Button
                      margin={"0 0.5rem 0.5rem 0"}
                      onClick={() => {
                        dispatch(deleteMeal(_id));
                        dispatch(currentItemRemoved());
                      }}
                      remove
                    >
                      Delete
                    </Button>
                  </>
                )}
              </ControlPanel>
              <Button
                color={"black"}
                margin={"1.5rem 0 0 0"}
                align={"center"}
                onClick={() => {
                  dispatch(currentItemRemoved());
                  dispatch(currentCategoryRemoved());
                  dispatch(productsRemoved());
                  dispatch(mealsRemoved());
                }}
              >
                Close
              </Button>
            </ProductsContainer>
          }
        />
      )}
    </Container>
  );
};

export default Meal;
