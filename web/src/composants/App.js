// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Start from './Start';
import Enigme from './Enigme';
import Snake from './Snake';
import Tir from './Tir';
import End from './End';

class App extends Component {
  render() {
    return (
    <Router>
        <div>

          <hr />
          <Switch>
              <Route exact path='/' component={Start} />
              <Route path='/Enigme' component={Enigme} />
              <Route path='/Snake' component={Snake} />
              <Route path='/Tir' component={Tir} />
              <Route path='/End' component={End} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

