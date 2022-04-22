import React from "react";
import Container from "../../templates/Container/Container";
import Title from "../../atoms/Title/Title";

const Hero = () => {
  return (
    <Container text={"center"} height={"94vh"} fill={"yellowgreen"}>
      <Title primary={"Daily"} secondary={"Diet Assistant"} />
    </Container>
  );
};

export default Hero;
