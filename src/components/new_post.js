import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewPost } from '../actions';

class NewPost extends Component{

  renderInputField(field){

    const { meta: {touched, error}} = field;
    const labelClassName = `form-group ${touched && error ?  'has-danger' : ''}`;

    return(
      <div className={labelClassName}>
      <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>

    );
  }

  onSubmitOfForm(values){
    this.props.createNewPost(values, ()=>{
      this.props.history.push('/');
    });
  }

  render(){

    const { handleSubmit } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmitOfForm.bind(this))}>
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
            component={this.renderInputField}
          />
          <button type="submit" className="btn btn-primary"> Publish </button>

          <Link style={{marginLeft: 15}} className="btn btn-danger" to="/">
            Cancel
          </Link>
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
})(
  connect(null,{ createNewPost })(NewPost)

);
