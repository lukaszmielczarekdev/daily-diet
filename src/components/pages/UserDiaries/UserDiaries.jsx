import React from "react";
import Diary from "../../organisms/Diary/Diary";
import Link from "../../atoms/Link/Link";
import AliceCarousel from "react-alice-carousel";
import { breakpoints } from "../../../styles/Carousel/carouselConfig";
import Container from "../../templates/Container/Container";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../styles/Carousel/carousel.css";
import { useSelector } from "react-redux";
import { Wrapper } from "./UserDiariesStyles";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);

  return (
    <Container column>
      <Link to="/builder">New diary</Link>
      {diaries.length !== 0 && (
        <Wrapper>
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
        </Wrapper>
      )}
    </Container>
  );
};

export default UserDiaries;
