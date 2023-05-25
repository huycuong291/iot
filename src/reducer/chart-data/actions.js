// actions.js
export const SET_HUMIDITY_DATA = "SET_HUMIDITY_DATA";

export const SET_TEMPERATURE_DATA = "SET_FILTERED_DATA";

export function setHumidityData(data) {
  return {
    type: SET_HUMIDITY_DATA,
    payload: data,
  };
}

export function setTemperatureData(data) {
  return {
    type: SET_TEMPERATURE_DATA,
    payload: data,
  };
}
