import React, { useEffect, useState } from "react";
import Diary from "../../organisms/Diary/Diary";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import Article from "../../organisms/Article/Article";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import Title from "../../atoms/Title/Title";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import Image from "../../atoms/Image/Image";
import Attributes from "../../molecules/Attributes/Attributes";
import eggs from "../../../assets/Images/eggs.jpg";
import { diaryAttributes } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import DiaryCard from "../../organisms/DiaryCard/DiaryCard";
import ProductDetails from "../../molecules/ProductDetails/ProductDetails";
import { exampleMeals } from "../../../data/constants";
import decode from "jwt-decode";
import {
  currentItemRemoved,
  currentCategoryRemoved,
  productsRemoved,
  mealsRemoved,
} from "../../../store/helpers";

const UserDiaries = () => {
  const { currentItem, currentItemType } = useSelector(
    (state) => state.user.helpers
  );
  const { diaries } = useSelector((state) => state.resources.diaries);
  const { currentUser } = useSelector((state) => state.user.authData);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  const token = user?.credential;
  const decodedToken = decode(token);

  const creator =
    decodedToken?.iss === "https://accounts.google.com"
      ? decodedToken.email
      : decodedToken.id;

  const dispatch = useDispatch();

  const checkIfLogged = () => {
    if (!currentUser) return "/auth";
    if (!currentUser.profile.bmr) return "/#calculator";
    return "/builder#top";
  };

  const renderDiaries = () => {
    return diaries
      .filter((diary) => diary.creator !== creator)
      .map((item) => <DiaryCard diary={item} />);
  };

  useEffect(() => {
    return () => {
      dispatch(currentItemRemoved());
      dispatch(currentCategoryRemoved());
      dispatch(productsRemoved());
      dispatch(mealsRemoved());
    };
  }, [dispatch]);

  return (
    <>
      <Container fillColor>
        {currentItem && currentItemType === "diary" ? (
          <ControlPanel padding={"2rem 0"}>
            <Diary diary={currentItem} closeLink={"#userDiaryCarousel"} />
          </ControlPanel>
        ) : (
          <>
            <Article
              padding={"5rem 3rem 1rem 3rem"}
              left={
                <Image
                  left
                  alt={"eggs on the table"}
                  src={eggs}
                  primary={"Low Cost"}
                  secondary={"Healthy\nSandwich"}
                />
              }
              right={
                <>
                  <TextField
                    titlePrimary={"Daily"}
                    titleSecondary={"Food Diaries"}
                    description={
                      "By creating diaries, you facilitate the implementation of the diet by observing your body and making adjustments depending on what effect you want to achieve.\n\nYou can use the available ready-made products and you can also add your own compositions.\n\nCreated diaries can be shared with others."
                    }
                  />
                  <LinkItem
                    add={1}
                    left={1}
                    hash={1}
                    color={"white"}
                    padding={"0.6rem"}
                    margin={"0.5rem 0"}
                    radius={"10px 0"}
                    to={checkIfLogged()}
                    children={"New diary"}
                    size={"0.8rem"}
                  />
                  <Attributes items={diaryAttributes} />
                </>
              }
            />
            <ControlPanel padding={"0 1rem"} margin={"0 3rem"}>
              <Attributes smallScreen items={diaryAttributes} />
            </ControlPanel>
            <ControlPanel margin={"1rem 0 0 0"} id={"userDiaryCarousel"}>
              <Carousel infinite breakpoints items={renderDiaries()} />
            </ControlPanel>

            <Title text={"center"} titlePrimary={"Example Meals"} />
            <ControlPanel justify={"space-around"} margin={"2rem"}>
              {exampleMeals.map((meal) => (
                <ProductDetails key={meal.id} {...meal} />
              ))}
            </ControlPanel>
          </>
        )}
      </Container>
    </>
  );
};

export default UserDiaries;
