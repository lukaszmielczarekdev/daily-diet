import React, { useContext } from "react";
import Diary from "../Diary/Diary";
import UserDataContext from "../../contexts/UserDataContext";
import {
  Section,
  SectionInnerContainer,
} from "../../styles/globalComponentsStyles";
import { v4 as uuidv4 } from "uuid";

const UserDiaries = () => {
  const userData = useContext(UserDataContext);

  return (
    <Section column>
      <hr />
      <SectionInnerContainer>
        Your Diaries
        {userData.userData.diaries.length !== 0 && (
          <ul>
            {userData.userData.diaries.map((diary) => (
              <Diary
                key={uuidv4()}
                title={diary.name}
                items={diary.items}
                id={diary.id}
              />
            ))}
          </ul>
        )}
      </SectionInnerContainer>
    </Section>
  );
};

export default UserDiaries;
