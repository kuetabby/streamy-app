import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import Auth from "./Auth";

const reducer = combineReducers({ Auth, form: formReducer });

export default reducer;
