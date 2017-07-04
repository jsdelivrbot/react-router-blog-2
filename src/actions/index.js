import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rachna';


export function fetchAllPosts(){
  const fetchUrl=`${ROOT_URL}/posts/${API_KEY}`;
  const promise = axios.get(fetchUrl);
  return{
    type: FETCH_POSTS,
    payload: promise
  };
}
