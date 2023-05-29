const fetchStateData = async () => {
  const response = await fetch("https://projectiot-69e65-default-rtdb.firebaseio.com/post/GET.json", {
    method: "GET",
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
};

export default fetchStateData;

export const editStateData = async (ledState, relayState) => {
  const newData = {
    LED_state: ledState,
    RELAY_state: relayState,
  };

  const response = await fetch("https://projectiot-69e65-default-rtdb.firebaseio.com/post/GET.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
};
