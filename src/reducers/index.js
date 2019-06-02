import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Auth from "./Auth";
import streamReducer from "./Stream";

const reducer = combineReducers({
  auth: Auth,
  form: formReducer,
  streams: streamReducer
});

export default reducer;
