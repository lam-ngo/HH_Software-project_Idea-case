import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllIdeas } from "../actions";

const customStyle = {
  addIdea: {
    padding: "40px 0px 40px 0px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }
};
class IdeaIndex extends Component {
  constructor(props){
    super(props);
      this.state = {
        allIdeas: null
      }
  }

  componentDidMount() {
    this.props.fetchAllIdeas();
  }

  renderIdeas() {
    const allIdeas = (this.state.allIdeas) ? this.state.allIdeas : this.props.ideas;
    return _.map(allIdeas, (idea) => {
      return (
        <li key={idea._id}>
          <Link to={`/ideas/:${idea._id}`}>
            {idea.id}<br/>
            {idea.title}<br/>

          </Link>

        </li>
      );
    });
  }

  render() {
    return (
      <div>

        <div style={customStyle.addIdea}>

          <input type="text" className="text-field" onChange={this.searchHandler}
            value={term} placeholder="Type your idea here..."/>

          <select className="text-field">
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <div className="button button-primary">
            <Link className="button-text" to="/posts/new">
              ADD NEW IDEA
            </Link>
          </div>
        </div>

        <div>
          <h3>IDEA BOARD</h3>
          <ul>
            {this.renderIdeas()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ideas: state.ideas };
}

export default connect(mapStateToProps, { fetchAllIdeas })(IdeaIndex);
