import * as types from './actionTypes';
import axios from 'axios';
// import { key } from '../API_KEY';

function requestQuote() {
  return {
    type: types.FETCH_QUOTE_REQUEST
  }
}
function recieveQuote(data) {
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

// action creator dispatches a function (thunk), that is handled by middleware with redux-thunk
export function fetchQuote() {
  return function(dispatch) {
    // dispatch request action to update store to reflect async request has begun
    dispatch(requestQuote());
    return axios.get('https://favqs.com/api/qotd')
      .then(res => {
        let data = res.data.quote;
        dispatch(recieveQuote(data));
      })
      .catch(error => {
        dispatch(recieveQuoteFailure(error));
      })
  }
}