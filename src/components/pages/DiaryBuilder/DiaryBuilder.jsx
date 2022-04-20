import React from "react";
import SearchBar from "../../organisms/SearchField/SearchBar";
import Ingredients from "../../../data/ingredients.json";
import SelectedMeals from "../../organisms/SelectedMeals/SelectedMeals";
import SelectedProducts from "../../organisms/SelectedProducts/SelectedProducts";
import Container from "../../templates/Container/Container";
import Link from "../../atoms/Link/Link";
import { useSelector } from "react-redux";

const DiaryBuilder = () => {
  const { meals, temporaryProducts } = useSelector(
    (state) => state.user.userItems
  );
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <Container id="diarybuilder">
      <Link to="/diaries">Diaries</Link>
      {bmr && (
        <>
          <SelectedMeals />
          {temporaryProducts.length !== 0 && <SelectedProducts />}
          <SearchBar placeholder="Search" data={[...Ingredients, ...meals]} />
        </>
      )}
    </Container>
  );
};

export default DiaryBuilder;
