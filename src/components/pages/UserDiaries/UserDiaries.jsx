import React from "react";
import Diary from "../../organisms/Diary/Diary";
import Link from "../../atoms/Link/Link";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import { useSelector } from "react-redux";

const UserDiaries = () => {
  const { diaries } = useSelector((state) => state.user.userItems);

  return (
    <Container
      column
      text={"center"}
      fill={({ theme }) => theme.colors.backgroundPrimary}
    >
      <Link to="/builder">New diary</Link>
      {diaries.length !== 0 && (
        <Carousel
          breakpoints
          items={diaries.map(({ id, name, meals, demand, demandCoverage }) => (
            <Diary
              progressData={demandCoverage}
              kcalDemand={demand.kcal}
              key={id}
              title={name}
              items={meals}
              id={id}
            />
          ))}
        />
      )}
    </Container>
  );
};

export default UserDiaries;
