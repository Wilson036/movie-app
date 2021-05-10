import home from 'pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import Layout from './components/common/Layout';
import movieInfo from 'pages/moveInfo';
import singUp from 'pages/singUp';
import singIn from 'pages/singIn';
import forgetPassword from 'pages/forgetPassword';
import resetPassword from 'pages/resetPassword';
import myList from 'pages/myList';
import PrivateRoute from 'components/common/PrivateRoute';

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
