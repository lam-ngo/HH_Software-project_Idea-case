import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateIdea } from "../actions";

const customStyle = {
  heading: {
    margin: '0px 0px 30px 0px',
  },
  button: {
    margin: '20px 5px'
  }
};

class IdeaEdit extends Component {
  constructor(props) {
    super(props),
    this.state = {
      chosenIdea: this.props.chosenIdea,
      editIdea: {
        title: this.props.chosenIdea.title,
        description: this.props.chosenIdea.description,
        budget: this.props.chosenIdea.budget,
        isReadyForComments: this.props.chosenIdea.isReadyForComments,
        peopleNeeded: this.props.chosenIdea.peopleNeeded,
        categoryId: this.props.chosenIdea.categoryId,
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let editIdea = this.state.editIdea;

    console.log(editIdea);

    if(
      editIdea.title !== '' && editIdea.description !== '' && editIdea.budget !== '' &&
      editIdea.peopleNeeded !== '' && editIdea.categoryId !== ''
    ) {
      this.props.updateIdea(this.props.chosenIdea.id, editIdea);
      this.props.history.push(`/ideas/${this.props.chosenIdea.id}`);
    } else {
      alert('No field can be empty!');
    }
  }

  render() {

    return (
      <div className="container">
        <h3 style={customStyle.heading} >EDIT IDEA {this.props.chosenIdea.id}</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <p>Title</p>
          <input name="title" value={this.state.editIdea.title} onChange={this.inputChanged} />
          <p>Description</p>
          <input name="description" value={this.state.editIdea.description} onChange={this.inputChanged} />
          <p>Budget</p>
          <input type="number" name="budget" value={this.state.editIdea.budget} onChange={this.inputChanged} />
          <p>Ready for comment?  <span>
              <select name="isReadyForComments" onChange={this.inputChanged}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select> </span>
          </p>
          <p>People needed</p>
          <input type="number" name="peopleNeeded" value={this.state.editIdea.peopleNeeded} onChange={this.inputChanged} />
          <p>Category id</p>
          <input type="number" name="categoryId" value={this.state.editIdea.categoryId} onChange={this.inputChanged} /> <br/ >

          <Link to="/"><button className="button button-primary button-text">Back To Home Page</button></Link>

          <button type="submit" className="button button-edit button-text" style={customStyle.button}>
            EDIT
          </button>

          <Link to={`/ideas/${this.props.chosenIdea.id}`}>
            <button className="button button-delete button-text"  style={customStyle.button}>
              CANCEL
            </button>
          </Link>
        </form>
      </div>
    );
  }

  inputChanged = (event) => {
    console.log(this.state.editIdea);
    this.setState({
      editIdea: Object.assign({}, this.state.editIdea, {[event.target.name]: event.target.value})
    });
  }
}

const mapStateToProps = (state) => {
  return {
    chosenIdea: state.idea.chosenIdea
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateIdea: (id, editIdea) => updateIdea(id, editIdea, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaEdit);
