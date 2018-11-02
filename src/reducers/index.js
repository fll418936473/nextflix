import { combineReducers } from "redux";

import mylist from "./mylist.js";
import recommendation from "./recommendation.js";

const reducers = combineReducers({
  mylist,
  recommendation
});

export default reducers;