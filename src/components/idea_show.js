import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchIdea, fetchAllComments, updateIdea, deleteIdea } from "../actions";
import ShowAllComments from './comment_index';

const customStyle = {
  container: {
    textAlign: 'left',
    padding: '20px 100px',
  },
  heading: {
    margin: '0px 0px 30px 0px',
  },
  button: {
    margin: 'auto'
  }
};

class IdeaShow extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchIdea(id);
    this.props.fetchAllComments(id);
  }

  onDeleteClick = () => {
    console.log(this.props.chosenIdea.id);
    this.props.deleteIdea(this.props.chosenIdea.id);
    //window.location = "/";
  }

  render() {
    const { chosenIdea, commentList } = this.props;

    if (!chosenIdea) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h3 style={customStyle.heading} >IDEA {chosenIdea.id}</h3>

        <div style={customStyle.container}>
          <p><strong>Title:</strong> {chosenIdea.title}</p>
          <p><strong>Description:</strong> {chosenIdea.description}</p>
          <p><strong>Budget:</strong> € {chosenIdea.budget}</p>
          <p><strong>Ready for comment?</strong> {!chosenIdea.isReadyForComments ? 'Yes' : 'No'}</p>
          <p><strong>People needed:</strong> {chosenIdea.peopleNeeded}</p>
          <p><strong>Created:</strong> {chosenIdea.creationDate.substring(0,10)}</p>
          <p><strong>Last modified:</strong> {chosenIdea.lastModified.substring(0,10)} at {chosenIdea.lastModified.substring(11,19)}</p>
          <p><strong>Category id:</strong> {chosenIdea.categoryId}</p>
        </div>

        <Link to="/"><button className="button button-primary button-text">Back To Home Page</button></Link>
        <Link to="/edit"><button className="button button-edit button-text">Edit Idea</button></Link>
        <button className="button button-delete button-text" onClick={this.onDeleteClick}>Delete Idea</button>

        <h3 style={customStyle.heading} >Comments</h3>

        <div style={customStyle.container}>
          <ShowAllComments commentList={commentList}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chosenIdea: state.idea.chosenIdea,
    commentList: state.comment.commentList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIdea: (id) => fetchIdea(id, dispatch),
    fetchAllComments: (id) => fetchAllComments(id, dispatch),
    updateIdea: (id, editIdea) => updateIdea(id, editIdea, dispatch),
    deleteIdea: (id) => deleteIdea(id, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);
