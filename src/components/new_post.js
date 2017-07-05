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
            label="Tags"
            name="tags"
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

// can have multiple forms in here
export default reduxForm({
  form:'PostsNewForm'
})(NewPost);
