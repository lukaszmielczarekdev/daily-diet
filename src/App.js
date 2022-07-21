import React, { useState, useEffect, useCallback } from "react";
import Footer from "./components/organisms/Footer/Footer";
import Hero from "./components/pages/Hero/Hero";
import Calculator from "./components/pages/Calculator/Calculator";
import NavBar from "./components/organisms/NavBar/NavBar";
import ThemeManager from "./themes/themeManager";
import { AppContainer } from "./AppStyles";
import UserDiaries from "./components/pages/UserDiaries/UserDiaries";
import DiaryBuilder from "./components/pages/DiaryBuilder/DiaryBuilder";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import PasswordReset from "./components/pages/PasswordReset/PasswordReset";
import Unsubscribe from "./components/pages/Unsubscribe/Unsubscribe";
import About from "./components/pages/About/About";
import Auth from "./components/pages/Auth/Auth";
import Articles from "./components/pages/Articles/Articles";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/molecules/ProtectedRoute/ProtectedRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { getProducts } from "./store/products";
import { getMeals } from "./store/meals";
import { getDiaries } from "./store/diaries";
import { deleteUser } from "./store/auth";
import { deleteDiary } from "./store/diaries";
import { deleteMeal } from "./store/meals";
import { deleteProduct } from "./store/products";
import { logout } from "./store/auth";
import Modal from "./components/molecules/Modal/Modal";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();

  const { isOpen, message, onClickAction, onClickActionArg } = useSelector(
    (state) => state.user.helpers.modal
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
    setUser(null);
    return <Redirect to={"/auth"} />;
  }, [dispatch]);

  useEffect(() => {
    const logged = user?.credential;
    if (!logged) {
      handleLogout();
    }
  }, [handleLogout, user?.credential]);

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

  useEffect(() => {
    dispatch(getDiaries());
    dispatch(getMeals());
    dispatch(getProducts());
  }, [dispatch]);

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
            <ProtectedRoute path={"/profile"} component={UserProfile} />
            <ProtectedRoute path={"/diaries"} component={UserDiaries} />
            <ProtectedRoute path={"/builder"} component={DiaryBuilder} />
            <Route path="/passwordreset" component={PasswordReset} />
            <Route path="/unsubscribe" component={Unsubscribe} />
            <Route path="/about" component={About} />
            <ProtectedRoute path={"/auth"} component={Auth} notForLoggedUsers />
            <Route path="*" component={Hero} />
          </Switch>
          <Footer />
          <Toaster />
          {isOpen && (
            <Modal
              message={message}
              onClickAction={onClickAction}
              onClickActionArg={onClickActionArg}
              actions={[deleteUser, deleteDiary, deleteMeal, deleteProduct]}
            />
          )}
        </AppContainer>
      </GoogleOAuthProvider>
    </ThemeManager>
  );
};

export default App;
