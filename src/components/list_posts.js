import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllPosts} from '../actions/index';


class ListPosts extends Component {

  componentDidMount(){
    this.props.fetchAllPosts();
  }
  renderAllPosts(){
    return _.map(this.props.allPosts, post=>{
      return(
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      );
    });
  }
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h1>All Posts </h1>
        <ul className="list-group">
          {this.renderAllPosts()}
        </ul>
      </div>
    );
  }
}

export function mapStateToProps(state){
  return {
    allPosts : state.posts
  };
}

export default connect(mapStateToProps,{fetchAllPosts})(ListPosts);
