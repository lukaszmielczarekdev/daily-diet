import React from "react";
import Footer from "./components/organisms/Footer/Footer";
import Hero from "./components/pages/Hero/Hero";
import Calculator from "./components/pages/Calculator/Calculator";
import NavBar from "./components/organisms/NavBar/NavBar";
import ThemeManager from "./themes/themeManager";
import { AppContainer } from "./AppStyles";
import UserDiaries from "./components/pages/UserDiaries/UserDiaries";
import DiaryBuilder from "./components/pages/DiaryBuilder/DiaryBuilder";
import Preferences from "./components/pages/Preferences/Preferences";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { bmr } = useSelector((state) => state.user.userProfile);

  return (
    <ThemeManager>
      <AppContainer>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Route path="/" exact component={Hero} />
            {!bmr && <Route path="/" exact component={Calculator} />}
          </Route>
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/preferences" component={Preferences} />
          <Route path="/diaries" component={UserDiaries} />
          <Route path="/builder" component={bmr ? DiaryBuilder : Calculator} />
          <Route path="*" component={Hero} />
        </Switch>
        <Footer />
      </AppContainer>
    </ThemeManager>
  );
};

export default App;
