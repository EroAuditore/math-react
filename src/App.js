import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Navigationbar />
    <Container className="d-flex justify-content-center pt-4">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/quote" component={Quote} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Container>
  </Router>
);

export default App;
