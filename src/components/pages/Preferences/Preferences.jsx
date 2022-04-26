import React from "react";
import Container from "../../templates/Container/Container";
import pizza from "../../../assets/Images/pizza.jpg";

const Preferences = () => {
  return (
    <Container
      background={pizza}
      text={"center"}
      fill={({ theme }) => theme.colors.backgroundPrimary}
    ></Container>
  );
};

export default Preferences;
