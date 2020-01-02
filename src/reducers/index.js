import { combineReducers } from "redux";
import { FETCH_NEWS, CHANGE_DISPLAY } from "../actions/types";

const fetchReducer = (initialState = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return initialState !== action.payload ? action.payload : initialState;
    default:
      return initialState;
  }
};

const displayReducer = (initialState = 8, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return initialState !== action.payload ? action.payload : initialState;
    default:
      return initialState;
  }
};

export default combineReducers({
  news: fetchReducer,
  displayNum: displayReducer
});
