import React from "react";
import Container from "../../templates/Container/Container";
import Link from "../../atoms/Link/Link";
import Article from "../../organisms/Article/Article";
import salad from "../../../assets/Images/salad.jpg";

const UserProfile = () => {
  return (
    <Container background={salad} text={"center"} fillColor>
      <Article
        padding={"1rem 2rem"}
        left={"left"}
        right={<Link to="/builder">New diary</Link>}
      />
    </Container>
  );
};

export default UserProfile;
