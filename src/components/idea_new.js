import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createIdea } from "../actions";

class NewIdea extends Component {
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
      <div class="container">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Category"
          name="category"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <Field
          label="Budget"
          name="budget"
          component={this.renderField}
        />

        <Field
          label="Created"
          name="created"
          component={this.renderField}
        />
        <Field
          label="Last Modified"
          name="lastModified"
          component={this.renderField}
        />
        <Field
          label="Comment"
          name="comment"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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
})(connect(null, { createIdea })(NewIdea));
