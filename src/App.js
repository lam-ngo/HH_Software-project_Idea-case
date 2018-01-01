import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import reducers from "./reducers";
import IdeaIndex from "./components/idea_index";
import IdeaNew from "./components/idea_new";
import IdeaShow from "./components/idea_show";
import IdeaEdit from "./components/idea_edit";
import Test from "./components/test";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="background">
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={IdeaIndex} />
              <Route path="/ideas/new" component={IdeaNew} />
              <Route path="/ideas/:id" component={IdeaShow} />
              <Route path="/edit" component={IdeaEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
