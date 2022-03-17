import React from "react";
import { useState, useEffect } from "react";
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
import Preferences from "./components/Preferences/Preferences";
// import UserProfile from "./components/UserProfile/UserProfile";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [userData, setUserData] = useState(
    getData("userData", initialUserData)
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleSetUserInfo = (values) => {
    const userDataDummy = { ...userData };
    for (let [key, value] of Object.entries(values)) {
      userDataDummy[key] = value;
    }
    setUserData(userDataDummy);
  };

  const handleSaveMeal = (items) => {
    const name = document.getElementById("name").value.length;
    if (3 <= name && name <= 25) {
      const userDataDummy = { ...userData };
      userDataDummy.meals = [
        ...userDataDummy.meals,
        {
          name: "[Template] " + document.getElementById("name").value,
          items: items,
        },
      ];
      setUserData(userDataDummy);
    }
  };

  const handleSaveDiary = (items, demand, progress) => {
    const name = document.getElementById("diary-name").value.length;
    if (
      3 <= name &&
      name <= 25 &&
      demand > 0 &&
      document.getElementById("caloric-adjustment").value
    ) {
      const userDataDummy = { ...userData };
      userDataDummy.diaries = [
        ...userDataDummy.diaries,
        {
          id: uuidv4(),
          name: document.getElementById("diary-name").value,
          kcalDemand: demand,
          progressData: JSON.parse(JSON.stringify(progress)),
          items: items,
        },
      ];
      setUserData(userDataDummy);
    }
  };

  const handleDeleteDiary = (id) => {
    const userDataDummy = { ...userData };
    const diaries = userDataDummy.diaries.filter((item) => item.id !== id);
    userDataDummy.diaries = diaries;
    setUserData(userDataDummy);
  };

  const setTotalMacrosForProducts = (arr) => {
    return arr.reduce(
      (acc, elem) => {
        return {
          protein: acc.protein + elem.protein,
          carbs: acc.carbs + elem.carbs,
          fat: acc.fat + elem.fat,
          kcal: acc.kcal + elem.kcal,
        };
      },
      { protein: 0, carbs: 0, fat: 0, kcal: 0 }
    );
  };

  const setTotalMacrosForMeals = (arr) => {
    return arr.reduce(
      (acc, elem) => {
        return {
          protein: acc.protein + elem.totalMacros.protein,
          carbs: acc.carbs + elem.totalMacros.carbs,
          fat: acc.fat + elem.totalMacros.fat,
          kcal: acc.kcal + elem.totalMacros.kcal,
        };
      },
      { protein: 0, carbs: 0, fat: 0, kcal: 0 }
    );
  };

  return (
    <UserDataContext.Provider
      value={{
        userData: userData,
        setUserInfo: handleSetUserInfo,
        saveMeal: handleSaveMeal,
        saveDiary: handleSaveDiary,
        deleteDiary: handleDeleteDiary,
        calculateMacrosForProducts: setTotalMacrosForProducts,
        calculateMacrosForMeals: setTotalMacrosForMeals,
      }}
    >
      <ThemeManager>
        <AppContainer>
          <NavBar />
          <Switch>
            <Route path="/preferences" component={Preferences} />
            <React.Fragment>
              {userData.bmr ? <DiaryBuilder /> : <Hero />}
              {/* <UserProfile /> */}
              <UserDiaries />
            </React.Fragment>
          </Switch>
          <Footer />
        </AppContainer>
      </ThemeManager>
    </UserDataContext.Provider>
  );
};

export default App;
