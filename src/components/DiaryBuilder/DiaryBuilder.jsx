import React from "react";
import SearchBar from "../Form/SearchBar";
import Ingredients from "../../data/ingredients.json";
import SelectedMeals from "../SelectedMeals/SelectedMeals";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
import {
  Section,
  SectionInnerContainer,
  SectionText,
  Link,
} from "../../styles/globalComponentsStyles";
import { useSelector } from "react-redux";

const DiaryBuilder = () => {
  const { meals } = useSelector((state) => state.user.userItems);
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <Section id="diarybuilder" column>
      <SectionInnerContainer>
        <Link to="/diaries">Diaries</Link>
        {bmr && (
          <SectionText smaller>
            <SelectedMeals />
            <SelectedProducts />
            <SearchBar placeholder="Search" data={[...Ingredients, ...meals]} />
          </SectionText>
        )}
      </SectionInnerContainer>
    </Section>
  );
};

export default DiaryBuilder;
