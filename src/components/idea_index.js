import _ from "lodash";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllIdeas } from "../actions";

class IdeaIndex extends Component {
  constructor(props){
    super(props);
      this.state = {
        term: '',
        allIdeas: null
      }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllIdeas());
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
        <div className="container">
          <h3>IDEA BOARD</h3>
          <ul>
            {this.renderIdeas()}
          </ul>
        </div>

        <div className="container">
            <Link className="button button-primary button-text" to="/ideas/new">
              ADD NEW IDEA
            </Link>
        </div>

      </div>
    );
  }
}

IdeaIndex.propTypes = {
  dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
  return { ideas: state.ideas };
}

export default connect(mapStateToProps, { fetchAllIdeas })(IdeaIndex);
