import React, { useState, useEffect, useCallback } from "react";
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
import Auth from "./components/pages/Auth/Auth";
import Articles from "./components/pages/Articles/Articles";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { diariesRemoved } from "./store/userItems";
import { logout } from "./store/auth";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    dispatch(diariesRemoved());
    setUser(null);
    history.push("/");
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.credential;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [handleLogout, user?.credential, location]);

  return (
    <ThemeManager>
      <GoogleOAuthProvider
        clientId={
          "546341062149-qn4vdlsiqchh7sav2tcim70frqhc62er.apps.googleusercontent.com"
        }
      >
        <AppContainer>
          <NavBar handleLogout={handleLogout} />
          <Switch>
            <Route path="/" exact>
              <Route path="/" exact component={Hero} />
              <Route path="/" exact component={Calculator} />
              <Route path="/" exact component={Articles} />
            </Route>
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/preferences" component={Preferences} />
            <Route path="/diaries" component={UserDiaries} />
            <Route path="/builder" component={DiaryBuilder} />
            <Route path="/auth" component={Auth} />
            <Route path="*" component={Hero} />
          </Switch>
          <Footer />
          <Toaster />
        </AppContainer>
      </GoogleOAuthProvider>
    </ThemeManager>
  );
};

export default App;
