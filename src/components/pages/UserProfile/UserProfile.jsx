import React from "react";
import Container from "../../templates/Container/Container";
import Link from "../../atoms/Link/Link";
import salad from "../../../assets/Images/salad.jpg";

const UserProfile = () => {
  return (
    <Container
      background={salad}
      text={"center"}
      height={"94vh"}
      fill={"yellowgreen"}
    >
      Your Profile
      <Link to="/builder">New diary</Link>
    </Container>
  );
};

export default UserProfile;
