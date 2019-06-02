import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "./actions";

function App(props) {
  const { createStream } = props;

  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const submit = values => {
    createStream(values);
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(submit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Title must not empty";
  }
  if (!values.description) {
    errors.description = "Description must not empty";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "Stream_Create",
  validate
})(App);

export default connect(
  null,
  {
    createStream
  }
)(formWrapped);
