import React from "react";
import Container from "../../templates/Container/Container";
// import Title from "../../atoms/Title/Title";
import Carousel from "../../organisms/Carousel/Carousel";
import Article from "../../organisms/Article/Article";
import { features } from "../../../data/constants";

const Hero = () => {
  return (
    <Container text={"center"} height={"94vh"} fill={"yellowgreen"}>
      {/* <Title primary={"Daily"} secondary={"Diet Assistant"} /> */}
      <Carousel
        autoPlay
        autoPlayInterval={5000}
        autoPlayStrategy={"all"}
        items={features.map((feature) => (
          <Article {...feature} />
        ))}
      />
    </Container>
  );
};

export default Hero;
