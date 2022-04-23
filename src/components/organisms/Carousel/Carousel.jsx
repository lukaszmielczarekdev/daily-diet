import React from "react";
import AliceCarousel from "react-alice-carousel";
import { chunks } from "./CarouselStyles";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CarouselCSS.css";
import { Wrapper } from "./CarouselStyles";

const Carousel = ({ width, items, breakpoints }) => {
  return (
    <Wrapper width={width}>
      <AliceCarousel
        controlsStrategy={"responsive"}
        responsive={breakpoints ? chunks : null}
        keyboardNavigation
        items={items}
      />
    </Wrapper>
  );
};

export default Carousel;
