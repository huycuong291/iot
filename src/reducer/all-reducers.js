// reducers.js
import { combineReducers } from "redux";
import OptionReducer from "./reducer-options";
import ActiveUserReducer from "./reducer-active";
import { temperatureDataReducer, humidityDataReducer } from "./chart-data/reducer-filtered-data";

const rootReducer = combineReducers({
  users: OptionReducer,
  activeUser: ActiveUserReducer,
  humidityData: humidityDataReducer,
  temperatureData: temperatureDataReducer,
});

export default rootReducer;
