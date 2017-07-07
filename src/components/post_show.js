import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById , deletePost} from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{

  componentDidMount(){

      const id = this.props.match.params.id;
      this.props.fetchPostById(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
    this.props.deletePost(id,  ()=>{
      this.props.history.push('/');
    });
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
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
        Delete Post
      </button>
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

export default connect(mapStateToProps, {fetchPostById , deletePost})(PostShow);
