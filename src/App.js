import home from 'pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
