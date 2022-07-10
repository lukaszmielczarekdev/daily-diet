import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <Route
      {...rest}
      exact
      render={(props) => {
        if (!user) return <Redirect to={"/auth"} />;
        return Component ? <Component {...props} /> : render(...props);
      }}
    />
  );
};

export default ProtectedRoute;
