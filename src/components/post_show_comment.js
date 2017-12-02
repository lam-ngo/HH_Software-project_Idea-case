import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


class ShowComment extends Component {
  

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    const people =  this.props.posts;
    return _.map(people, (post) => {
      return (
        <li className="list-group-item" key={post._id}>
          
            {post.name}<br/>
           
            
         
          
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

export default connect(mapStateToProps, { fetchPosts })(ShowComment);