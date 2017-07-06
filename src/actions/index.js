import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const NEW_POST = 'new_post';

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

export function createNewPost(values, callback){
  const promise = axios.post(requestUrl, values)
  .then(()=> callback());
  return{
    type: NEW_POST,
    payload: promise
  };
}
