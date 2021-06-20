import home from "pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/common/Layout";
import movieInfo from "pages/MovieInfo";
import singUp from "pages/SingUp";
import singIn from "pages/SingIn";
import forgetPassword from "pages/ForgetPassword";
import resetPassword from "pages/ResetPassword";
import myList from "pages/MyList";
import PrivateRoute from "components/common/PrivateRoute";

library.add(fab, faCheck, faPlus);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/singUp" component={singUp} />
          <Route path="/singIn" component={singIn} />
          <Route path="/forgetPassword" component={forgetPassword} />
          <Route path="/change-password/:token" component={resetPassword} />
          <Route path="/movie-info/:movieId" component={movieInfo} />
          <PrivateRoute path="/myList" component={myList} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
