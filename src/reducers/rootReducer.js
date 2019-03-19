import { combineReducers } from 'redux';
import { quotes } from './quoteReducer';
import { favorites } from './favoriteReducer';

const rootReducer = combineReducers({
  quotes,
  favorites
});

export default rootReducer;