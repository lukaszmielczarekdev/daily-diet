import React, { useEffect } from "react";
import Diary from "../../organisms/Diary/Diary";
import LinkItem from "../../molecules/LinkItem/LinkItem";
import Article from "../../organisms/Article/Article";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import Image from "../../atoms/Image/Image";
import Attributes from "../../molecules/Attributes/Attributes";
import eggs from "../../../assets/Images/eggs.jpg";
import { diaryAttributes } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import DiaryCard from "../../organisms/DiaryCard/DiaryCard";
import ClipLoader from "react-spinners/ClipLoader";
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
  const { diaries, status } = useSelector((state) => state.resources.diaries);
  const { currentUser } = useSelector((state) => state.user.authData);

  const dispatch = useDispatch();

  const showCarousel =
    currentUser &&
    status !== "loading" &&
    Array.isArray(diaries) &&
    diaries?.length !== 0;

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
        <Article
          padding={"5rem 3rem 1rem 3rem"}
          left={
            <Image
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
                add
                color={"white"}
                padding={"0.6rem"}
                margin={"0.5rem 0"}
                radius={"10px 0"}
                to={!currentUser.profile.bmr ? "/" : "/builder"}
                children={"New diary"}
                size={"0.8rem"}
              />
              <Attributes items={diaryAttributes} />
            </>
          }
        />
        <ControlPanel margin={"1rem 0 0 0"}>
          <ClipLoader
            loading={currentUser && status === "loading"}
            size={150}
          />
          {showCarousel && (
            <Carousel
              infinite
              breakpoints
              items={diaries.map((diary) => (
                <DiaryCard diary={diary} />
              ))}
            />
          )}
        </ControlPanel>
      </Container>
      {currentItem && currentItemType === "diary" && <Diary />}
    </>
  );
};

export default UserDiaries;
