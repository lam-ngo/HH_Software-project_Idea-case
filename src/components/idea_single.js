import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchIdea, updateIdea, deleteIdea } from "../actions";
import ShowComment from './comment_index';

class SingleIdea extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchIdea(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteIdea(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { idea } = this.props;

    if (!idea) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Home Page</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Idea
        </button>

        <h3>Id: {idea.id}</h3>
        <h6>Title: {idea.title}</h6>
        <p>Description: {idea.description}</p>
        <ShowComment id={idea.id}/>
      </div>
    );
  }
}

function mapStateToProps({ ideas }, ownProps) {
  return { idea: ideas[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchIdea, deleteIdea })(SingleIdea);
