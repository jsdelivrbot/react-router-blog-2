import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{

  componentDidMount(){

      const id = this.props.match.params.id;
      this.props.fetchPostById(id);
  }

  render(){

    // this.props === ownProps;

    // posts[this.props.match.params.id];
    const {post} = this.props;

    if(!post){
      return(
        <div>
          Loading...
        </div>
      )
    }

    return(
      <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/">
        Delete
      </Link>
      <h3>Title : {post.title}</h3>
      <h6>Categories : {post.categories}</h6>
      <h6>Content : {post.content}</h6>

      </div>

    );
  }
}

//first arg is application state
function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPostById})(PostShow);
