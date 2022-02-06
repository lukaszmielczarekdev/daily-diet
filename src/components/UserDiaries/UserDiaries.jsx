import React, { useContext } from "react";
import Diary from "../Diary/Diary";
import UserDataContext from "../../contexts/UserDataContext";
import { Section } from "../../styles/globalComponentsStyles";

const UserDiaries = () => {
  const userData = useContext(UserDataContext);

  return (
    <Section column>
      Your Diaries
      {userData.userData.diaries.length !== 0 && (
        <ul>
          {userData.userData.diaries.map((diary) => (
            <Diary key={Math.random()} title={diary.name} items={diary.items} />
          ))}
        </ul>
      )}
    </Section>
  );
};

export default UserDiaries;
