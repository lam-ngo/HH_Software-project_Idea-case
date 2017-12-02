import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </Router>
    );
  }
}



export default App;
