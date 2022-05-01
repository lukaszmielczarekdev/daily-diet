import React from "react";
import Container from "../../templates/Container/Container";
import Link from "../../atoms/Link/Link";
import Article from "../../organisms/Article/Article";

const UserProfile = () => {
  return (
    <Container fillColor>
      <Article left={"left"} right={<Link to="/builder">New diary</Link>} />
    </Container>
  );
};

export default UserProfile;
