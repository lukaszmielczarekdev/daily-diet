import React from "react";
import Container from "../../templates/Container/Container";
import Carousel from "../../organisms/Carousel/Carousel";
import FeatureArticle from "../../organisms/FeatureArticle/FeatureArticle";
import { features } from "../../../data/constants";

const Hero = () => {
  return (
    <Container fillColor>
      <Carousel
        infinite
        autoPlay
        autoPlayInterval={10000}
        autoPlayStrategy={"all"}
        items={features.map((feature) => (
          <FeatureArticle
            {...feature}
            titlePrimary={feature.titlePrimary}
            titleSecondary={feature.titleSecondary}
            alt={feature.alt}
          />
        ))}
      />
    </Container>
  );
};

export default Hero;
