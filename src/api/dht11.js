import moment from "moment";

function getHumidityValues(data) {
  let humidityArray = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      humidityArray.push(parseFloat(data[key].humidity));
    }
  }

  return humidityArray;
}

function getTemperatureValues(data) {
  let temperatureArray = [];

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      temperatureArray.push(parseFloat(data[key].temperature));
    }
  }

  return temperatureArray;
}

const fetchData = async (dataType) => {
  const response = await fetch("https://projectiot-69e65-default-rtdb.firebaseio.com/post/PUB/DHT11.json", {
    method: "GET",
  });
  const jsonData = await response.json();

  const data = jsonData;
  function convertData(data) {
    return Object.entries(data).map(([epoch, value]) => {
      const date = new Date(epoch * 1000); // Convert to milliseconds
      return {
        time: date.toLocaleString(),
        humidity: value.humidity,
        temperature: value.temperature,
      };
    });
  }

  const dataArray = convertData(data);
  const now = moment();

  // const filteredData = dataArray.filter((item) => moment(item.time, "M/D/YYYY, h:mm:ss A").isSameOrAfter(now, "day"));
  switch (dataType) {
  }
  const humidityArray = getHumidityValues(dataArray);
  return humidityArray;
};

export default fetchData;
