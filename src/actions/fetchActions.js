import * as types from './actionTypes';
import axios from 'axios';
import key from '../API_KEY';

function requestQuote() {
  return {
    type: types.FETCH_QUOTE_REQUEST
  }
}
function recieveQuoteSuccess(data) {
  return {
    type: types.FETCH_QUOTE_SUCCESS,
    quote: data
  }
}
function recieveQuoteFailure(error) {
  return {
    type: types.FETCH_QUOTE_FAILURE,
    error: error
  }
}

function requestSearchQuote(term) {
  return {
    type: types.SEARCH_QUOTE_REQUEST,
    term: term
  }
}
function receiveSearchedQuoteSuccess(data) {
  return {
    type: types.SEARCH_QUOTE_SUCCESS,
    quotes: data
  }
}
function recieveSearchedQuoteFailure(error) {
  return {
    type: types.SEARCH_QUOTE_FAILURE,
    error: error
  }
}

// action creator dispatches a function (thunk), that is handled by middleware with redux-thunk
export function fetchQuote() {
  return function(dispatch) {
    // dispatch request action to update store to reflect async request has begun
    dispatch(requestQuote());
    // make HTTP call
    return axios.get('https://favqs.com/api/qotd')
      .then(res => {
        let data = res.data.quote;
        dispatch(recieveQuoteSuccess(data));
      })
      .catch(error => {
        dispatch(recieveQuoteFailure(error));
      })
  }
}

export function searchQuote(term) {
  return function(dispatch) {
    dispatch(requestSearchQuote(term));
    let header = `Token token="${key}"`;
    // make HTTP call
    let config = {
      headers: {
        Authorization: header
      }
    }
    
    let url = 'https://favqs.com/api/quotes/?filter=' + term;
    return axios.get(url, config)
      .then(res => {
        let data = res.data.quotes;
        dispatch(receiveSearchedQuoteSuccess(data));
      })
      .catch(error => {
        dispatch(recieveSearchedQuoteFailure(error));
      });
  }
}