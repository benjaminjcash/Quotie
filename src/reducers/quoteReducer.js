import * as types from '../actions/actionTypes';

export function quotes(state = {
  isFetching: false,
  quote: [],
  quoteList: []
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
    
    case types.SEARCH_QUOTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    
    case types.SEARCH_QUOTE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        quoteList: action.quotes
      });
    
    case types.SEARCH_QUOTE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.eerror
      });
      
    default:
      return Object.assign({}, state);
  }
}