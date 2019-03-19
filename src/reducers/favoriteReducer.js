import * as types from '../actions/actionTypes';

export function favorites(state = {
  callingDatabase: false,
}, action) {
  switch(action.type) {

    case types.ADD_FAVORITE_REQUEST:
      return Object.assign({}, state, {
        callingDatabase: true
      });

    case types.ADD_FAVORITE_SUCCESS:
      return Object.assign({}, state, {
        callingDatabase: false,
        success: action.success
      });

    case types.ADD_FAVORITE_FAILURE:
      return Object.assign({}, state, {
        callingDatabase: false,
        error: action.error
      });

    case types.GET_FAVORITES_REQUEST:
      return Object.assign({}, state, {
        callingDatabase: true
      });

    case types.GET_FAVORITES_SUCCESS:
      return Object.assign({}, state, {
        callingDatabase: false,
        favorites: action.favorites
      });
    
    case types.GET_FAVORITES_FAILURE:
      return Object.assign({}, state, {
        callingDatabase: false,
        error: action.error
      });
    
    case types.DELETE_FAVORITE_REQUEST:
      return Object.assign({}, state, {
        callingDatabase: true
      });
    
    case types.DELETE_FAVORITE_SUCCESS:
      return Object.assign({}, state, {
        callingDatabase: false
      });
    
    case types.DELETE_FAVORITE_FAILURE:
      return Object.assign({}, state, {
        callingDatabase: false
      })

    default:
      return Object.assign({}, state);
  }
}
