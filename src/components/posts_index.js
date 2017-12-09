import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

const customStyle = {
  addIdea: {
    padding: "40px 0px 40px 0px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }
};
class PostsIndex extends Component {
  constructor(props){
    super(props);
      this.state = {
        term: '',
        currentPeople: null
      }
    this.searchHandler= this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  searchHandler(event){
    let searchingFor = _.filter(this.props.posts, (post) => post.name.includes(event.target.value) || post.phoneNumber.includes(event.target.value));

    this.setState({
      term: event.target.value,
      currentPeople: searchingFor
    });
  }

  renderPosts() {
    const people = (this.state.currentPeople) ? this.state.currentPeople : this.props.posts;
    return _.map(people, (post) => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link to={`/posts/${post._id}`}>
            {post.name}<br/>
            {post.gender}<br/>

          </Link>

        </li>
      );
    });
  }

  render() {
    const { term }= this.state;
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

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
