// reducer-filtered-data.js
import { SET_HUMIDITY_DATA, SET_TEMPERATURE_DATA } from "./actions";

const initialState = [];

function humidityDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HUMIDITY_DATA:
      return action.payload;
    default:
      return state;
  }
}

function temperatureDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEMPERATURE_DATA:
      return action.payload;
    default:
      return state;
  }
}

export { humidityDataReducer, temperatureDataReducer };
