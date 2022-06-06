import React, { useEffect } from "react";
import Container from "../../templates/Container/Container";
import { useDispatch } from "react-redux";
import Article from "../../organisms/Article/Article";
import { getUsers } from "../../../store/auth";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { userItemCategories } from "../../../data/constants";
import MenuItem from "../../molecules/MenuItem/MenuItem";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container fillColor>
      <Article
        padding={"3rem 3rem 2rem 3rem"}
        left={<span>left</span>}
        right={<span>right</span>}
      />
      <ControlPanel align={"baseline"}>
        {userItemCategories.map((category) => (
          <MenuItem key={category.id} {...category} />
        ))}
      </ControlPanel>
    </Container>
  );
};

export default UserProfile;
