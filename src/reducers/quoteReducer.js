import * as types from '../actions/actionTypes';

export function quotes(state = {
  isFetching: false,
  quote: []
}, action) {
  
  switch(action.type) {

    case types.FETCH_QUOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case types.FETCH_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        quote: action.quote
      });
    
    case types.FETCH_QUOTE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    
    default:
      return Object.assign({}, state);
  }
}