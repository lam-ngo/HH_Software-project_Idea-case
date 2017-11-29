import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/idea/comment" component={SingleIdeaComment} />
        </Switch>
      </Router>
    );
  }
}

const data = {
  sample:[
    {
    id: 5001,
    title: "1st idea",
    description: "This is a description",
    budget: 5000,
    isReadyForComments: true,
    peopleNeeded: 15,
    creationDate: "27-9-2017",
    lastModified: "27-9-2017 12:30:00",
    categoryId: 103
  },{
    id: 5002,
    title: "2nd idea",
    description: "This is a description",
    budget: 5000,
    isReadyForComments: true,
    peopleNeeded: 15,
    creationDate: "27-9-2017",
    lastModified: "27-9-2017 12:30:00",
    categoryId: 103
  },{
    id: 5003,
    title: "3rd idea",
    description: "This is a description",
    budget: 5000,
    isReadyForComments: true,
    peopleNeeded: 15,
    creationDate: "27-9-2017",
    lastModified: "27-9-2017 12:30:00",
    categoryId: 103
  }
]};

const Table = props => {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Budget</th>
          <th>Comment ready?</th>
          <th>Personel</th>
          <th>Created</th>
          <th>Last modified</th>
          <th>Comment</th>
          <th colSpan="2"></th>
        </thead>

        <tbody>
          {data.sample.map( (idea,index) =>
            <tr key={index}>
              <td>{idea.id}</td>
              <td>{idea.title}</td>
              <td>{idea.categoryId}</td>
              <td>{idea.description}</td>
              <td>{idea.budget}</td>
              <td>{idea.isReadyForComments}</td>
              <td>{idea.peopleNeeded}</td>
              <td>{idea.creationDate}</td>
              <td>{idea.lastModified}</td>
              <td><button><Link to="/idea/comment">Comment (click this)</Link></button></td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const SingleIdeaComment = props => {
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Created</th>
          <th>Author</th>
          <th>Content</th>
        </thead>

        <tbody>
            <tr>
              <td>1</td>
              <td>30-11-2017</td>
              <td>Lam</td>
              <td>This is a comment</td>
            </tr>

            <tr>
              <td>1</td>
              <td>30-11-2017</td>
              <td>Lam</td>
              <td>This is a comment</td>
            </tr>

            <tr>
              <td>1</td>
              <td>30-11-2017</td>
              <td>Lam</td>
              <td>This is a comment</td>
            </tr>
        </tbody>
      </table>
      <button><Link to="/">Back to main page</Link></button>
    </div>
  );
};

export default App;
