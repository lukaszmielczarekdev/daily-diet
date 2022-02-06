import { useState, useEffect } from "react";
import MakeDiary from "./pages/MakeDiaryPage";
import { getData } from "./utils/localstorage";
import { initialUserData } from "./data/userdata";
import UserDataContext from "./contexts/UserDataContext";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ThemeManager from "./themes/themeManager";
import { AppContainer } from "./AppStyles";
import UserDiaries from "./components/UserDiaries/UserDiaries";
import DiaryBuilder from "./components/DiaryBuilder/DiaryBuilder";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  const [userData, setUserData] = useState(
    getData("userData", initialUserData)
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleSetUserInfo = (key, value) => {
    const userDataDummy = { ...userData };
    userDataDummy[key] = value;
    setUserData(userDataDummy);
  };

  const handleSaveMeal = (items) => {
    if (document.getElementById("name").value) {
      const userDataDummy = { ...userData };
      userDataDummy.meals = [
        ...userDataDummy.meals,
        { name: document.getElementById("name").value, items: items },
      ];
      setUserData(userDataDummy);
    }
  };

  // const handleAddDiary = (items) => {
  //   if (document.getElementById("name").value) {
  //     // ...
  //   }
  // };

  const handleDeleteDiary = (diary) => {
    const userDataDummy = { ...userData };
    const diaries = userDataDummy.diaries.filter(
      (item) => item.id !== diary.id
    );
    userDataDummy.diaries = diaries;
    setUserData(userDataDummy);
  };

  return (
    <UserDataContext.Provider
      value={{
        userdata: userData,
        setUserInfo: handleSetUserInfo,
        saveMeal: handleSaveMeal,
        deleteDiary: handleDeleteDiary,
      }}
    >
      <ThemeManager>
        <AppContainer>
          <NavBar />
          <Hero />
          <UserProfile />
          <UserDiaries />
          <DiaryBuilder />
          <MakeDiary />
          <Footer />
        </AppContainer>
      </ThemeManager>
    </UserDataContext.Provider>
  );
};

export default App;
