import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllComments } from "../actions";


class ShowComment extends Component {


  componentDidMount() {
    this.props.fetchPosts(this.props.id);
  }

  renderPosts() {
    const comments =  this.props.comments;
    return _.map(comments, (comment) => {
      return (
        <li className="list-group-item" key={comment._ideaId}>

            {comment.ideaId}<br/>
            {comment.commentLine}<br/>



        </li>
      );
    });
  }

  render() {

    return (
      <div>

        <div className="text-xs-right">

          <Link className="btn btn-primary" to="/posts/new">
            Add your comment
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

//export default connect(mapStateToProps, { fetchPosts })(ShowComment);
