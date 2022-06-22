import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button as CustomButton,
  Select,
  InnerContainer,
  Input,
  StyledSpan,
  Container,
  Label,
  Span,
} from "./ProductCreatorStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../../store/products";
import Title from "../../atoms/Title/Title";
import Gallery from "../Gallery/Gallery";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import {
  itemEditModeSet,
  currentItemRemoved,
  editedProductsAdded,
  currentCategoryRemoved,
  productsRemoved,
} from "../../../store/helpers";

const ProductCreator = ({ editMode }) => {
  const dispatch = useDispatch();

  const { itemEditMode, currentItem, currentItemBackup } = useSelector(
    (state) => state.user.helpers
  );

  const { _id, nutrients, title, category, createdAt } = useSelector((state) =>
    state.user.helpers.currentItem?._id
      ? state.user.helpers.currentItem
      : {
          _id: null,
          nutrients: null,
          title: null,
          createdAt: null,
          category: null,
        }
  );

  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      kcal: "",
      carbs: "",
      fat: "",
      protein: "",
      category: "",
      amount: "",
    },
  });

  const submitProduct = async ({
    title,
    kcal,
    carbs,
    fat,
    protein,
    category,
  }) => {
    dispatch(
      createProduct({
        title,
        nutrients: {
          kcal: kcal / 100,
          protein: protein / 100,
          carbs: carbs / 100,
          fat: fat / 100,
        },
        category,
        amount: 1,
      })
    );
    dispatch(productsRemoved());
    dispatch(currentItemRemoved());
  };

  const submitProductUpdate = async ({
    title,
    kcal,
    carbs,
    fat,
    protein,
    category,
  }) => {
    dispatch(
      updateProduct({
        id: currentItemBackup._id,
        product: {
          title,
          nutrients: {
            kcal: kcal / 100,
            protein: protein / 100,
            carbs: carbs / 100,
            fat: fat / 100,
          },
          category,
          amount: 1,
        },
      })
    );
    dispatch(productsRemoved());
    dispatch(currentItemRemoved());
  };

  return (
    <Gallery
      smallText
      text={"center"}
      justify={"center"}
      titlePrimary={!itemEditMode && createdAt}
      titleSecondary={!itemEditMode && title}
      padding={"0rem 3rem 3rem 3rem"}
      children={
        <>
          {itemEditMode && (
            <Title text={"center"} titlePrimary={"Product Creator"} />
          )}
          <Container>
            {editMode && !itemEditMode ? (
              <InnerContainer>
                <Span>Category: {category}</Span>
                <Span>Nutrients:</Span>
                {Object.entries(nutrients).map(([key, value], index) => (
                  <Span key={index}>
                    {key}: {Math.round(value * 100)}
                  </Span>
                ))}
                <ControlPanel border fit>
                  {editMode && (
                    <>
                      <Button
                        margin={"0 0.5rem 0.5rem 0"}
                        onClick={() => {
                          dispatch(itemEditModeSet());
                          dispatch(
                            editedProductsAdded({ products: [currentItem] })
                          );
                        }}
                        edit
                      >
                        Edit
                      </Button>
                      <Button
                        margin={"0 0.5rem 0.5rem 0"}
                        onClick={() => {
                          dispatch(deleteProduct(_id));
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
                  }}
                >
                  Close
                </Button>
              </InnerContainer>
            ) : (
              <InnerContainer>
                <Form
                  onSubmit={handleSubmitProduct(
                    itemEditMode ? submitProductUpdate : submitProduct
                  )}
                >
                  <StyledSpan>Amount: 100g</StyledSpan>
                  <Input
                    text
                    type="text"
                    placeholder={
                      itemEditMode ? currentItemBackup.title : "Title"
                    }
                    {...registerProduct("title", {
                      required: true,
                      maxLength: 15,
                    })}
                  />
                  <Input
                    type="number"
                    placeholder={
                      itemEditMode
                        ? "kcal: " + currentItemBackup.nutrients.kcal
                        : "Kcal"
                    }
                    {...registerProduct("kcal", {
                      valueAsNumber: true,
                      max: 5000,
                      min: 0,
                      required: true,
                      maxLength: 4,
                      pattern: /\d+/,
                    })}
                  />
                  <Input
                    type="number"
                    placeholder={
                      itemEditMode
                        ? "protein: " + currentItemBackup.nutrients.protein
                        : "Protein"
                    }
                    {...registerProduct("protein", {
                      valueAsNumber: true,
                      max: 5000,
                      min: 0,
                      required: true,
                      maxLength: 4,
                      pattern: /\d+/,
                    })}
                  />
                  <Input
                    type="number"
                    placeholder={
                      itemEditMode
                        ? "carbs: " + currentItemBackup.nutrients.carbs
                        : "Carbs"
                    }
                    {...registerProduct("carbs", {
                      valueAsNumber: true,
                      max: 5000,
                      min: 0,
                      required: true,
                      maxLength: 4,
                      pattern: /\d+/,
                    })}
                  />
                  <Input
                    type="number"
                    placeholder={
                      itemEditMode
                        ? "fat: " + currentItemBackup.nutrients.fat
                        : "Fat"
                    }
                    {...registerProduct("fat", {
                      valueAsNumber: true,
                      max: 5000,
                      min: 0,
                      required: true,
                      maxLength: 4,
                      pattern: /\d+/,
                    })}
                  />
                  <Label>Category</Label>
                  <Select
                    {...registerProduct("category", {
                      required: true,
                    })}
                  >
                    <option value={"meat"}>Meat</option>
                    <option value={"grain"}>Grain</option>
                    <option value={"cheese"}>Cheese</option>
                    <option value={"fruit"}>Fruit</option>
                    <option value={"vegetable"}>Vegetable</option>
                    <option value={"drink"}>Drink</option>
                    <option value={"other"}>Other</option>
                  </Select>
                  <CustomButton type="submit">Create</CustomButton>
                </Form>
                <Button
                  color={"black"}
                  margin={"1.5rem 0 0 0"}
                  align={"center"}
                  onClick={() => {
                    dispatch(currentItemRemoved());
                    dispatch(currentCategoryRemoved());
                    dispatch(productsRemoved());
                  }}
                >
                  Close
                </Button>
              </InnerContainer>
            )}
          </Container>
        </>
      }
    />
  );
};

export default ProductCreator;