import React from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ThemeManager from "./themes/themeManager";
import { AppContainer } from "./AppStyles";
import UserDiaries from "./components/UserDiaries/UserDiaries";
import DiaryBuilder from "./components/DiaryBuilder/DiaryBuilder";
import Preferences from "./components/Preferences/Preferences";
import UserProfile from "./components/UserProfile/UserProfile";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <ThemeManager>
      <AppContainer>
        <NavBar />
        <Switch>
          <Route path="/" exact component={bmr ? UserProfile : Hero} />
          <Route path="/preferences" component={bmr ? Preferences : Hero} />
          <Route path="/builder" component={bmr ? DiaryBuilder : Hero} />
          <Route path="/diaries" component={bmr ? UserDiaries : Hero} />
        </Switch>
        <Footer />
      </AppContainer>
    </ThemeManager>
  );
};

export default App;
