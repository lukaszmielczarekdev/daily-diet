import React from "react";
import AliceCarousel from "react-alice-carousel";
import { chunks } from "./CarouselStyles";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CarouselCSS.css";
import { Container } from "./CarouselStyles";

const Carousel = ({
  items,
  infinite,
  breakpoints,
  autoPlay,
  autoPlayInterval,
  autoPlayStrategy,
  background,
  slideToIndex,
}) => {
  return (
    <Container background={background}>
      <AliceCarousel
        infinite={infinite}
        autoPlay={autoPlay}
        slideToIndex={slideToIndex}
        autoPlayInterval={autoPlayInterval}
        autoPlayStrategy={autoPlayStrategy}
        controlsStrategy={"responsive"}
        responsive={breakpoints ? chunks : null}
        keyboardNavigation
        items={items}
      />
    </Container>
  );
};

export default Carousel;
