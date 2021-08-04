import home from "pages/HomePage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/common/Layout";
import movieInfo from "pages/MovieInfoPage";
import singUp from "pages/SingUpPage";
import singIn from "pages/SingInPage";
import forgetPassword from "pages/ForgetPasswordPage";
import resetPassword from "pages/ResetPasswordPage";
import myList from "pages/MyListPage";
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
