import React, { useEffect } from "react";
import Container from "../../templates/Container/Container";
import { useSelector, useDispatch } from "react-redux";
import Article from "../../organisms/Article/Article";
import { getUsers } from "../../../store/auth";

const UserProfile = () => {
  const { users } = useSelector((state) => state.user.authData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container fillColor>
      <Article
        left={<span>users</span>}
        right={
          <ul>
            {Array.isArray(users) &&
              users?.length !== 0 &&
              users.map((user) => <li>{user.name}</li>)}
          </ul>
        }
      />
    </Container>
  );
};

export default UserProfile;
