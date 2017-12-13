import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createIdea } from "../actions";

class IdeaNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        <div>
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createIdea(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <h3>NEW IDEA</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p>Title</p>
          <Field name="title" component={this.renderField} />
          <p>Category</p>
          <Field name="category" component={this.renderField} />
          <p>Description</p>
          <Field name="description" component={this.renderField} />
          <p>Budget</p>
          <Field name="budget" component={this.renderField} />
          <p>Created</p>
          <Field name="created" component={this.renderField} />
          <p>Last Modified</p>
          <Field name="lastModified" component={this.renderField} />
          <p>Comment</p>
          <Field name="comment" component={this.renderField} />

          <button type="submit" className="button button-edit button-text">SUBMIT</button>

          <Link to="/" className="button button-delete button-text">CANCEL</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.name = "Enter Title";
  }
  if (!values.category) {
    errors.phoneNumber = "Enter your category";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "IdeaNewForm"
})(connect(null, { createIdea })(IdeaNew));
