// reducers.js
import { combineReducers } from "redux";
import OptionReducer from "./reducer-options";
import ActiveUserReducer from "./reducer-active";
import { temperatureDataReducer, humidityDataReducer } from "./chart-data/reducer-filtered-data";
import Login from "./login-reducer";
const rootReducer = combineReducers({
  users: OptionReducer,
  login: Login,
  activeUser: ActiveUserReducer,
  humidityData: humidityDataReducer,
  temperatureData: temperatureDataReducer,
});

export default rootReducer;
