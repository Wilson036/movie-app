import home from 'pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import Layout from './components/Layout';
import movieInfo from 'pages/movieInfo';
import singUp from 'pages/singUp';
import singIn from 'pages/singIn';

library.add(fab, faCheck, faPlus);

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/singUp" component={singUp} />
          <Route path="/singIn" component={singIn} />
          <Route path="/movie-info/:movieId" component={movieInfo} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
