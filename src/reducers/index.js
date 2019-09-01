import { combineReducers } from "redux";
import {
  FETCH_NEWS,
  FETCH_NEWS_ECO,
  FETCH_NEWS_REL,
  FETCH_NEWS_WORLD
} from "../actions/types";

const fetchReducer = (initialState = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
    case FETCH_NEWS_WORLD:
    case FETCH_NEWS_ECO:
    case FETCH_NEWS_REL:
      return action.payload;
    default:
      return initialState;
  }
};

export default combineReducers({
  news: fetchReducer
});
