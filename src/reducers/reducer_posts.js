import _ from 'lodash';
import {NEW_POST , FETCH_POST_BY_ID, FETCH_POSTS, DELETE_POST} from '../actions';

export default function(state={}, action){

  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST_BY_ID:
      const post = action.payload.data;
      // const newState =  { ...state,  };
      // newState[post.id] = post;
      // return newState;
    case DELETE_POST:
      return _.omit(state, action.payload)
    case NEW_POST:
      // square brackets mean make a new key on this object
      return { ...state , [post.id]: post};

    default:
      return state;
  }
}
