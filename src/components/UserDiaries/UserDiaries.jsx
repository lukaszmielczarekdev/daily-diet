import React, { useContext } from "react";
import Diary from "../Diary/Diary";
import UserDataContext from "../../contexts/UserDataContext";
import {
  Section,
  SectionInnerContainer,
  Button,
} from "../../styles/globalComponentsStyles";
import { v4 as uuidv4 } from "uuid";
import AliceCarousel from "react-alice-carousel";
import { breakpoints } from "../../styles/Carousel/carouselConfig";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/Carousel/carousel.css";

const UserDiaries = () => {
  const userData = useContext(UserDataContext);

  return (
    <Section column>
      <SectionInnerContainer>
        Your Diaries
        {userData.userData.diaries.length !== 0 && (
          <AliceCarousel
            controlsStrategy={"responsive"}
            responsive={breakpoints}
            keyboardNavigation
            items={userData.userData.diaries.map((diary) => (
              <Diary
                progressData={diary.progressData}
                kcalDemand={diary.kcalDemand}
                key={uuidv4()}
                title={diary.name}
                items={diary.items}
                id={diary.id}
              />
            ))}
          />
        )}
        <a href={"#diarybuilder"}>
          <Button>New diary</Button>
        </a>
      </SectionInnerContainer>
    </Section>
  );
};

export default UserDiaries;
