import _ from 'lodash';
import {FETCH_POSTS} from '../actions/index';
import {NEW_POST} from '../actions';

export default function(state={}, action){

  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case NEW_POST:
      console.log(action.payload);
    default:
      return state;
  }
}
