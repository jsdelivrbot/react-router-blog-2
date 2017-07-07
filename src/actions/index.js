import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST_BY_ID = 'fetch_post_by_id';
export const NEW_POST = 'new_post';
export const DELETE_POST ="delete_post";

const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rachna';
const requestUrl=`${ROOT_URL}/posts/${API_KEY}`;


export function fetchAllPosts(){
  const promise = axios.get(requestUrl);
  return{
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPostById(id){
  const promise = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);
  return{
    type: FETCH_POST_BY_ID,
    payload: promise
  };
}

export function createNewPost(values, callback){
  const promise = axios.post(requestUrl, values)
  .then(()=> callback());
  return{
    type: NEW_POST,
    payload: promise
  };
}

export function deletePost(id, callback){
  const promise = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
  .then(()=> callback());
  return{
    type: DELETE_POST,
    payload: id
  };
}
