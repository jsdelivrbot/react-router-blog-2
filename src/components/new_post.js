import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';

class NewPost extends Component{

  renderInputField(field){
    return(
      <div className="form-group">
      <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>

    );
  }

  renderContentField(field){
    return(
      <div className="form-group">
      <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render(){
    return(
      <div>
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderInputField}
            />
          <Field
            label="Categories"
            name="categories"
            component={this.renderInputField}
            />
            <Field
              label="Post Content"
              name="content"
              component={this.renderContentField}
              />

        </form>
      </div>
    );
  }
}

// called automatically - one when user tries to submit the form
// values is an object that contains all the values that the user has entered in the form
function validation(values){
  //console.log(values) -> { title: '', categories:'', content:''}
  const errors = {};

  // do the validations using {values}
  if(!values.title || values.title.length<3){
    errors.title="Enter a valid title!";
  }
  if(!values.categories){
    errors.categories="Enter a category!";
  }
  if(!values.content){
    errors.content="Enter some Content!";
  }

  // If the {errors} is empty the form can be submitted
  // If {errors} has any properties, redux form assumes form is invalid
  return errors;

}

// can have multiple forms in here
export default reduxForm({
  validate: validation,
  form:'PostsNewForm'
})(NewPost);
