import React from "react";
import Diary from "../Diary/Diary";
import {
  Section,
  SectionInnerContainer,
  Link,
} from "../../styles/globalComponentsStyles";
import AliceCarousel from "react-alice-carousel";
import { breakpoints } from "../../styles/Carousel/carouselConfig";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/Carousel/carousel.css";
import { useSelector } from "react-redux";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);

  return (
    <Section column>
      <SectionInnerContainer>
        <Link to="/builder">New diary</Link>
        Your Diaries
        {diaries.length !== 0 && (
          <AliceCarousel
            controlsStrategy={"responsive"}
            responsive={breakpoints}
            keyboardNavigation
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
      </SectionInnerContainer>
    </Section>
  );
};

export default UserDiaries;
