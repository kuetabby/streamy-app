import React from "react";
import { Field, reduxForm } from "redux-form";

function App(props) {
  console.log(props);

  const renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  return (
    <form className="ui form">
      <Field name="Title" component={renderInput} label="Enter Title" />
      <Field
        name="Description"
        component={renderInput}
        label="Enter Description"
      />
    </form>
  );
}

export default reduxForm({
  form: "Stream_Create"
})(App);
