import React from "react";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import Article from "../../organisms/Article/Article";
import { features } from "../../../data/constants";

const Hero = () => {
  return (
    <Container
      text={"center"}
      fill={({ theme }) => theme.colors.backgroundPrimary}
    >
      <Carousel
        infinite
        autoPlay
        autoPlayInterval={10000}
        autoPlayStrategy={"all"}
        items={features.map((feature) => (
          <Article {...feature} padding={"1rem 5rem"} />
        ))}
      />
    </Container>
  );
};

export default Hero;
