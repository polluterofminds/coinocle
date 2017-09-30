import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import walletsReducer from "./walletsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  wallets: walletsReducer
});
