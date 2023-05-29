import moment from "moment";

function convertData(data) {
  return Object.entries(data).map(([epoch, value]) => {
    const date = new Date(epoch * 1000);
    return {
      time: date.toLocaleString(),
      current: value.current,
      power: value.Power,
      humidity: value.humidity,
      temperature: value.temperature,
    };
  });
}

const fetchStateData = async () => {
  const response = await fetch("https://projectiot-69e65-default-rtdb.firebaseio.com/post/GET.json", {
    method: "GET",
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
};

export default fetchStateData;
