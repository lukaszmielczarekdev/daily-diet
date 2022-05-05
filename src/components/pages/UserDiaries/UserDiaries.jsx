import React, { useState } from "react";
import Diary from "../Diary/Diary";
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
import Card3 from "../../molecules/Card3/Card3";
import RoundChart from "../../organisms/RoundChart/RoundChart";
import CheckList from "../../molecules/CheckList/CheckList";
import { placeholders } from "../../../data/constants";
import { IoAddCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);
  const { bmr } = useSelector((state) => state.user.userProfile);
  const history = useHistory();

  const [currentDiary, setCurrentDiary] = useState(null);

  const findDiary = (id) => {
    return diaries.find((diary) => id === diary.id);
  };

  const resetView = () => {
    setCurrentDiary(null);
  };

  const renderCards = () => {
    if (diaries.length === 0) return diaries.concat(placeholders);
    if (diaries.length === 1)
      return diaries.concat(placeholders[0], placeholders[1]);
    if (diaries.length === 2) return diaries.concat(placeholders[2]);
    else return diaries;
  };

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
              <Link color={"green"} to={!bmr ? "/" : "/builder"}>
                New diary
              </Link>
              <Attributes items={diaryAttributes} />
            </>
          }
        />
        <ControlPanel margin={"1rem 0 0 0"}>
          {diaries.length !== 0 && (
            <Carousel
              infinite
              breakpoints
              items={renderCards().map(
                ({ id, name, demandCoverage, meals, date }) => (
                  <Card3
                    fillColor
                    key={id}
                    onClick={
                      date
                        ? () => setCurrentDiary(findDiary(id))
                        : () => history.push("/builder")
                    }
                    header={name}
                    description={date}
                    main={
                      date ? (
                        <RoundChart
                          data={[demandCoverage.kcal.completed]}
                          label={"KCAL"}
                          size={"260px"}
                          nameSize={"12px"}
                          valueSize={"25px"}
                          offset={-10}
                        />
                      ) : (
                        <IoAddCircleOutline
                          size={"150px"}
                          color={"rgb(125, 215, 120)"}
                        />
                      )
                    }
                    footer={
                      <CheckList
                        smallText
                        color={"rgb(125, 215, 120)"}
                        data={meals}
                        element={"name"}
                      />
                    }
                  />
                )
              )}
            />
          )}
        </ControlPanel>
      </Container>
      {currentDiary && (
        <Diary
          progressData={currentDiary.demandCoverage}
          kcalDemand={currentDiary.demand.kcal}
          key={currentDiary.id}
          title={currentDiary.name}
          items={currentDiary.meals}
          id={currentDiary.id}
          resetView={resetView}
          date={currentDiary.date}
        />
      )}
    </>
  );
};

export default UserDiaries;
