import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createIdea } from "../actions";

const customStyle = {
  heading: {
    margin: '0px 0px 30px 0px',
  },
  button: {
    margin: '20px 5px'
  }
};

class IdeaNew extends Component {
  constructor(props) {
    super(props),
    this.state = {
      newIdea: {
        title: '',
        description: '',
        budget: '',
        isReadyForComments: "false",
        peopleNeeded: '',
        categoryId: '',
      }
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    let newIdea = this.state.newIdea;

    console.log(newIdea);

    if(
      newIdea.title !== '' && newIdea.description !== '' && newIdea.budget !== '' &&
      newIdea.peopleNeeded !== '' && newIdea.categoryId !== ''
    ) {
      this.props.createIdea(newIdea);
      window.location = "/";
    } else {
      alert('No field can be empty!');
    }
  }

  render() {

    return (
      <div className="container">
        <h3 style={customStyle.heading} >NEW IDEA</h3>
        <form onSubmit={this.onSubmit}>
          <p>Title</p>
          <input name="title" value={this.state.newIdea.title} onChange={this.inputChanged} />
          <p>Description</p>
          <input name="description" value={this.state.newIdea.description} onChange={this.inputChanged} />
          <p>Budget</p>
          <input type="number" name="budget" value={this.state.newIdea.budget} onChange={this.inputChanged} />
          <p>Ready for comment?  <span>
              <select name="isReadyForComments" value={this.state.newIdea.isReadyForComments} onChange={this.inputChanged}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select> </span>
          </p>
          <p>People needed</p>
          <input type="number" name="peopleNeeded" value={this.state.newIdea.peopleNeeded} onChange={this.inputChanged} />
          <p>Category id</p>
          <input type="number" name="categoryId" value={this.state.newIdea.categoryId} onChange={this.inputChanged} /> <br/ >

          <button type="submit" className="button button-edit button-text" style={customStyle.button}>
            SUBMIT
          </button>

          <Link to="/">
            <button className="button button-delete button-text"  style={customStyle.button}>
              CANCEL
            </button>
          </Link>
        </form>
      </div>
    );
  }

  inputChanged = (event) => {
    console.log(this.state.newIdea);
    this.setState({
      newIdea: Object.assign({}, this.state.newIdea, {[event.target.name]: event.target.value})
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createIdea: (newIdea) => createIdea(newIdea, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(IdeaNew);
