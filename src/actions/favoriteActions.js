import * as types from './actionTypes';
import database from '../firebase/initializeFirebase'

function addFavoriteRequest() {
  return {
    type: types.ADD_FAVORITE_REQUEST
  }
}
function addFavoriteSuccess(data) {
  return {
    type: types.ADD_FAVORITE_SUCCESS,
    favorite: data
  }
}
function addFavoriteFailure(error) {
  return {
    type: types.ADD_FAVORITE_FAILURE,
    error: error
  }
}

function getFavoritesRequest() {
  return {
    type: types.GET_FAVORITES_REQUEST
  }
}
function getFavoritesSuccess(data) {
  return {
    type: types.GET_FAVORITES_SUCCESS,
    favorites: data
  }
}
function getFavoritesFailure() {
  return {
    type: types.GET_FAVORITES_FAILURE
  }
}

function deleteFavoriteRequest() {
  return {
    type: types.DELETE_FAVORITE_REQUEST
  }
}
function deleteFavoriteSuccess(data) {
  return {
    type: types.DELETE_FAVORITE_SUCCESS,
    favorites: data
  }
}
function deleteFavoriteFailure() {
  return {
    type: types.DELETE_FAVORITE_FAILURE
  }
}

export function addFavorite(quote) {
  return function(dispatch) {
    dispatch(addFavoriteRequest());
    return database.ref('/favorites').push({
      body: quote.body,
      author: quote.author
    })
      .then((ref) => {
        dispatch(addFavoriteSuccess());
      })
      .catch((err) => {
        dispatch(addFavoriteFailure(err));
      });
  }
}

export function getFavorites() {
  return function(dispatch) {
    dispatch(getFavoritesRequest());
    return database.ref('/favorites/').once('value')
      .then(function(snapshot) {
        let data = [];
        let rawData = snapshot.val();
        for(let key in rawData) {
          let fav = rawData[key];
          fav.id = key;
          data.push(fav);
        }
        dispatch(getFavoritesSuccess(data));
      })
      .catch(function(err) {
        dispatch(getFavoritesFailure(err));
      })
  }
}

export function deleteFavorite(id) {
  return function(dispatch) {
    dispatch(deleteFavoriteRequest());
    return database.ref(`/favorites/${id}`).remove()
      .then(function(res) {
        dispatch(deleteFavoriteSuccess());
        dispatch(getFavorites());
      })
      .catch(function(err) {
        dispatch(deleteFavoriteFailure(err));
      })
  }
}