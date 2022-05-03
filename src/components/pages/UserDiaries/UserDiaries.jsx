import React from "react";
import Diary from "../../organisms/Diary/Diary";
import Link from "../../atoms/Link/Link";
import Article from "../../organisms/Article/Article";
import TextField from "../../molecules/TextField/TextField";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import Image from "../../atoms/Image/Image";
import Attributes from "../../molecules/Attributes/Attributes";
import eggs from "../../../assets/Images/eggs.jpg";
import { diaryAttributes } from "../../../data/constants";
import { useSelector } from "react-redux";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);

  return (
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
            <Link color={"green"} to="/builder">
              New diary
            </Link>
            <Attributes items={diaryAttributes} />
          </>
        }
      />
      <ControlPanel margin={"1rem 0 3rem 0"}>
        {diaries.length !== 0 && (
          <Carousel
            breakpoints
            items={diaries.map(
              ({ id, name, meals, demand, demandCoverage }) => (
                <Diary
                  progressData={demandCoverage}
                  kcalDemand={demand.kcal}
                  key={id}
                  title={name}
                  items={meals}
                  id={id}
                />
              )
            )}
          />
        )}
      </ControlPanel>
    </Container>
  );
};

export default UserDiaries;
